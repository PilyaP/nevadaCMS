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
// module.exports = ({ env }) => ({
//   email: {
//     provider: "nodemailer",
//     providerOptions: {
//       apiKey: env("SENDGRID_API_KEY"),
//     },

//     settings: {
//       defaultFrom: "info@ppcwarehouses.com",
//       defaultReplyTo: "info@ppcwarehouses.com",
//     },
//   },
//   // ... другие плагины
// });
// module.exports = ({ env }) => ({
//   // ... другие плагины
//   email: {
//     provider: "sendmail",
//     settings: {
//       defaultFrom: "info@ppcwarehouses.com",
//       defaultReplyTo: "info@ppcwarehouses.com",
//     },
//   },
//   // ... другие плагины
// });
// тест плогинов не работает :(     