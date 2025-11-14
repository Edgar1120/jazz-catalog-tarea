// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    highlight: { theme: 'github-dark' }
  },
  nitro: {
    preset: 'netlify'
  },
  app: {
    head: {
      title: 'Catálogo de jazz',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
})