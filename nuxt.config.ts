// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  nitro: {
    experimental: {
      openAPI: true
    }
  },
  
  plugins: [
   
  ],
  
  // Настройка переменных окружения
  runtimeConfig: {
    // Переменные, доступные только на сервере
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpSecure: process.env.SMTP_SECURE,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    emailRecipient: process.env.EMAIL_RECIPIENT,
    
    // Публичные переменные, доступные на клиенте
    public: {
      // При необходимости можно добавить публичные переменные
    }
  }
})
