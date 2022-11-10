/**
 * post controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::post.post",
  ({ strapi }) => ({
    async create(ctx) {
      const { id: user } = ctx.state.user;
      const newData = JSON.parse(ctx.request.body.data);
      ctx.request.body.data = JSON.stringify({
        ...newData,
        user,
      });

      const response = await super.create(ctx);

      return response;
    },
    async myPosts(ctx) {
      const { id: userId } = ctx.state.user;
      const response = await strapi.service("api::post.post").find({
        ...ctx.query,
        filters: { user: { id: { $eq: userId } } },
        populate: { images: true },
      });

      return response;
    },
  })
);
