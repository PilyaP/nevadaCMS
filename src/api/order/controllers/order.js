const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({}) => ({
  async find(ctx) {
    const user = ctx.state.user;
    console.log("user :", user);

    if (!user) {
      return ctx.forbidden();
    }

    const { data, meta } = await super.find(ctx, {
      filters: { user: user.id },
    });

    const resData = data.filter((item) => {
      if (item.attributes.mailFor === user.email) {
        return item;
      }
    });

    return { resData, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const user = ctx.state.user;

    if (!user) {
      return ctx.forbidden();
    }

    const { data, meta } = await super.findOne(ctx);

    if (data && data.user && data.user.id === user.id) {
      return { data, meta };
    } else {
      return ctx.unauthorized(`You can't view this order`);
    }
  },

}));
