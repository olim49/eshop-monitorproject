// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      umamiUrl: 'https://ton-domaine-umami/script.js',
      umamiId: 'TON_WEBSITE_ID'
    }
  }
})
