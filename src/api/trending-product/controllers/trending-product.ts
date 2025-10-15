/**
 * trending-product controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::trending-product.trending-product', ({ strapi }) => ({
  async find(ctx) {
    // Populate the productImage field
    ctx.query = {
      ...ctx.query,
      populate: {
        productImage: true,
      }
    };
    
    const { data, meta } = await super.find(ctx);
    
    // Transform the data to match frontend expectations
    const transformedData = data.map(product => ({
      ...product,
      imageUrl: product.productImage?.url || '',
      productSlug: product.title ? product.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') : '',
    }));
    
    return { data: transformedData, meta };
  },

  async findOne(ctx) {
    // Populate the productImage field
    ctx.query = {
      ...ctx.query,
      populate: {
        productImage: true,
      }
    };
    
    const { data, meta } = await super.findOne(ctx);
    
    // Transform the data to match frontend expectations
    if (data) {
      const transformedData = {
        ...data,
        imageUrl: data.productImage?.url || '',
        productSlug: data.title ? data.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') : '',
      };
      return { data: transformedData, meta };
    }
    
    return { data, meta };
  }
}));
