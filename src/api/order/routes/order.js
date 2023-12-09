const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::order.order", {
  // Определение политик для маршрутов
  config: {
    find: {
      policies: ["global::is-authenticated"], // Определяет политику для аутентифицированных пользователей
    },
    create: {
      policies: ["global::is-authenticated"],
    },
    // findOne: {
    //   policies: [
    //     "global::is-authenticated",
    //     "plugins::users-permissions.has-role",
    //     {
    //       name: "test",
    //       role: "test",
    //     },
    //   ], // Определяет политику для нескольких ролей, включая кастомную роль 'test'
    // },
    update: {
      policies: ["global::is-authenticated"],
    },
    delete: {
      policies: ["global::is-authenticated"],
    },
  },
});
