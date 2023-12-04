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
    provider: "sendmail",
    providerOptions: {
      // Опции для sendmail могут быть здесь, если они вам нужны
    },
    settings: {
      defaultFrom: "info@ppcwarehouses.com",
      defaultReplyTo: "info@ppcwarehouses.com",
    },
  },
  // ... другие настройки ...
});
