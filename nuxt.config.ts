// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: ['~/assets/styles/tailwind.scss', '~/assets/styles/main.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    langDir: './locales/',
    locales: [
      { code: 'en', name: 'EN', file: 'en.js', dir: 'ltr' },
      { code: 'ar', name: 'ع', file: 'ar.js', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n'
    }
  }
})
