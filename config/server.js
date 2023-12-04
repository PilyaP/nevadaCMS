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
      host: "localhost",
      port: 1025,
      auth: {
        user: "project_1",
        pass: "secret.1",
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
