// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@pinia/nuxt'],
  app: {
    baseURL: "/grokhotov/",
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Grokhotov test',
      meta: [
        { name: 'description', content: 'Test for Grokhotov Studio' }
      ],
    },
    router: {
      base: '/grokhotov/'
    },
    target: 'static',
  }
})