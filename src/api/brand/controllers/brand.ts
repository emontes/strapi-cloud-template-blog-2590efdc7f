/**
 * brand controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::brand.brand', ({ strapi }) => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  }
}));
