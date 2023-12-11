module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      // origin: ["*"],
      origin: ["https://nevada-frontend.vercel.app", "http://localhost:3000", ['*']]
       credentials: true,
    },

    
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
