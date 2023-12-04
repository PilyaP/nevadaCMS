// module.exports = {
//   documentation: {
//     enabled: true,
//     config: {
//       openapi: "3.0.0",
//       info: {
//         version: "1.0.0",
//         title: "Nevada",
//         description: "",
//         termsOfService: false,
//         contact: {
//           name: "Pasha Team",
//           email: "info@ppcwarehouses.com",
//           url: "https://nevada-frontend.vercel.app/",
//         },
//         license: {
//           name: "Apache 2.0",
//           url: "https://www.apache.org/licenses/LICENSE-2.0.html",
//         },
//       },
//       "x-strapi-config": {
//         plugins: ["users-permissions"],
//         path: "/documentation",
//       },
//       servers: [
//         {
//           url: "https://nevadacms.onrender.com/api",
//           description: "Prodaction server",
//         },
//         { url: "http://localhost:1337/api", description: "Development server" },
//       ],
//       security: [{ bearerAuth: [] }],
//     },
//   },
// };
module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  email: {
    provider: "sendgrid",
    providerOptions: {
      host: "smtp.sendgrid.net",
      port: 587,
      auth: {
        user: "apikey",
        pass: "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",
      },
      secure: false,
    },
    settings: {
      defaultFrom: "info@ppcwarehouses.com",
      defaultReplyTo: "info@ppcwarehouses.com",
    },
  },
  // ... другие настройки ...
});
