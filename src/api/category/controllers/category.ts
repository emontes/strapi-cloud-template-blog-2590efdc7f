/**
 * category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::category.category', ({ strapi }) => ({
  async find(ctx) {
    // Populate with hierarchical structure
    ctx.query = {
      ...ctx.query,
      populate: {
        productTypes: {
          populate: {
            products: {
              populate: {
                image: true,
                brand: {
                  populate: {
                    logo: true
                  }
                },
                celebritySightings: {
                  populate: {
                    celebrity: true
                  }
                }
              }
            }
          }
        },
        products: {
          populate: {
            image: true,
            brand: {
              populate: {
                logo: true
              }
            },
            productTypes: true,
            celebritySightings: {
              populate: {
                celebrity: true
              }
            }
          }
        }
      }
    };
    
    const { data, meta } = await super.find(ctx);
    
    // Transform to include product counts and celebrity information
    const transformedData = data.map(category => ({
      ...category,
      productCount: category.products?.length || 0,
      productTypeCount: category.productTypes?.length || 0,
      productTypes: category.productTypes?.map(productType => ({
        ...productType,
        productCount: productType.products?.length || 0,
        products: productType.products?.map(product => ({
          ...product,
          imageUrl: product.image?.url || '',
          brandName: product.brand?.name || '',
          brandLogo: product.brand?.logo?.url || '',
          celebrityCount: product.celebritySightings?.length || 0,
          celebrities: product.celebritySightings?.map(sighting => sighting.celebrity) || []
        })) || []
      })) || []
    }));
    
    return { data: transformedData, meta };
  },

  async findOne(ctx) {
    // Same population for single category
    ctx.query = {
      ...ctx.query,
      populate: {
        productTypes: {
          populate: {
            products: {
              populate: {
                image: true,
                brand: {
                  populate: {
                    logo: true
                  }
                },
                celebritySightings: {
                  populate: {
                    celebrity: true
                  }
                }
              }
            }
          }
        },
        products: {
          populate: {
            image: true,
            brand: {
              populate: {
                logo: true
              }
            },
            productTypes: true,
            celebritySightings: {
              populate: {
                celebrity: true
              }
            }
          }
        }
      }
    };
    
    const { data, meta } = await super.findOne(ctx);
    
    if (data) {
      const transformedData = {
        ...data,
        productCount: data.products?.length || 0,
        productTypeCount: data.productTypes?.length || 0,
        productTypes: data.productTypes?.map(productType => ({
          ...productType,
          productCount: productType.products?.length || 0,
          products: productType.products?.map(product => ({
            ...product,
            imageUrl: product.image?.url || '',
            brandName: product.brand?.name || '',
            brandLogo: product.brand?.logo?.url || '',
            celebrityCount: product.celebritySightings?.length || 0,
            celebrities: product.celebritySightings?.map(sighting => sighting.celebrity) || []
          })) || []
        })) || []
      };
      
      return { data: transformedData, meta };
    }
    
    return { data, meta };
  }
}));
