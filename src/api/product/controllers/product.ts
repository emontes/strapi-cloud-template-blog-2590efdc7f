import { factories } from '@strapi/strapi';

const getMediaUrl = (m) => {
  if (!m) return '';
  // accepts either relation shape { data: { attributes: { url }}} or plain attributes
  if (m?.url) return m.url;
  return m?.data?.attributes?.url ?? '';
};

const one = (rel) => {
  if (!rel) return null;
  if (rel?.data) return { id: rel.data.id, ...rel.data.attributes };
  return rel; // already flattened
};

const many = (rel) => {
  if (!rel) return [];
  if (Array.isArray(rel?.data)) return rel.data.map((e) => ({ id: e.id, ...e.attributes }));
  if (Array.isArray(rel)) return rel; // already flattened
  return [];
};

const safeParseJSON = (val, fallback) => {
  try {
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') return JSON.parse(val);
    return fallback;
  } catch {
    return fallback;
  }
};

const flattenProduct = (node) => {
  const id = node?.id ?? null;
  const a = node?.attributes ?? node ?? {};

  const brand = one(a.brand);
  const categories = many(a.categories);
  const productTypes = many(a.productTypes);
  const celebritySightings = many(a.celebritySightings);
  const celebrities = many(a.celebrities);
  const sightings = many(a.sightings);

  const categoryNames = categories.map((c) => c.name).filter(Boolean);
  const productTypeNames = productTypes.map((t) => t.name).filter(Boolean);

  const mappedSightings = celebritySightings.map((s) => {
    const celeb = many(s.celebrities)?.[0]; // Get first celebrity from the many-to-many relationship
    const images = many(s.images);
    const sourceUrls = safeParseJSON(s.sourceUrls, []);
    return {
      id: s.id,
      ...s,
      celebrityName: celeb?.name ?? '',
      celebrityProfilePicture: getMediaUrl(celeb?.profileImage) || '',
      imageUrls: images.map((img) => getMediaUrl(img)).filter(Boolean),
      sourceUrls,
    };
  });

  const hierarchicalPath = categories.map((cat) => {
    const relevant = productTypes; // refine if you later model the link between category & type
    return `${cat?.name ?? ''} > ${relevant.map((t) => t?.name).filter(Boolean).join(', ')}`;
  });

  return {
    id,
    ...a,
    // convenience fields
    imageUrl: getMediaUrl(a.image),
    brandName: brand?.name ?? '',
    brandLogo: getMediaUrl(brand?.logo) || '',
    categoryNames,
    productTypeNames,
    hierarchicalPath,
    celebrityCount: mappedSightings.length,
    celebritySightings: mappedSightings,
    // keep legacy/raw relations if your frontend still expects them
    celebrities,
    categories,
    productTypes,
    sightings,
    brand,
  };
};

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    // Ensure all needed relations are populated
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
        brand: { populate: { logo: true } },
        categories: true,
        productTypes: true,
        celebrities: true,
        sightings: true,
        // celebritySightings: {
        //   populate: {
        //     celebrities: { populate: { profileImage: true } },
        //     images: true,
        //   },
        //   sort: 'date:desc',
        // },
      },
    };

    const res = await super.find(ctx); // { data, meta } or possibly undefined on edge cases
    const data = Array.isArray(res?.data) ? res.data : [];
    const meta = res?.meta ?? {};

    const transformed = data.map((node) => flattenProduct(node));
    return { data: transformed, meta };
  },

  async findOne(ctx) {
    // Mirror the same populate as in find
    ctx.query = {
      ...ctx.query,
      populate: {
        image: true,
        brand: { populate: { logo: true } },
        categories: true,
        productTypes: true,
        celebrities: true,
        sightings: true,
        // celebritySightings: {
        //   populate: {
        //     celebrities: { populate: { profileImage: true } },
        //     images: true,
        //   },
        //   sort: 'date:desc',
        // },
      },
    };

    const res = await super.findOne(ctx); // can be null in some conditions
    if (!res || !res.data) {
      return ctx.notFound('Product not found');
    }

    const transformed = flattenProduct(res.data);
    return { data: transformed, meta: res.meta ?? {} };
  },
}));