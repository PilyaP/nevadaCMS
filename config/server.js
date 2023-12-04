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
    provider: "sendmail", //
    providerOptions: {
      host: env("EMAIL_SMTP_HOST"), // SMTP Host
      port: env.int("EMAIL_SMTP_PORT"), // SMTP Port
      auth: {
        user: env("EMAIL_SMTP_USER"),
        pass: env("EMAIL_SMTP_PASS"),
      },
    },
    settings: {
      defaultFrom: "info@ppcwarehouses.com",
      defaultReplyTo: "info@ppcwarehouses.com",
    },
  },
});
