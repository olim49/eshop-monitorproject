// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      umamiUrl: 'https://ton-domaine-umami/script.js',
      umamiId: 'TON_WEBSITE_ID'
    }
  },

  css: ['~/assets/css/tailwind.css'],

  modules: ['@nuxtjs/tailwindcss'],
})
