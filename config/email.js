module.exports = ({ env }) => ({
  // ... другие плагины
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "smtp.example.com"),
      port: env("SMTP_PORT", 587),
      auth: {
        user: env("SMTP_USERNAME"),
        pass: env("SMTP_PASSWORD"),
      },
      // Используйте `secure: true` для порта 465 или `secure: false` для портов 587 и 25.
      secure: false,
    },
    settings: {
      defaultFrom: "your-email@example.com",
      defaultReplyTo: "your-email@example.com",
    },
  },
  // ... другие плагины
});
