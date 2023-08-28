import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Philosopher:wght@700&family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap',
          as: 'style',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Philosopher:wght@700&family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap',
        },
      ],
    },
  },
  css: [
    '~/assets/styles/scss/main.scss',
    '@mdi/font/css/materialdesignicons.css',
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
  ],
  components: true,
  devtools: { enabled: false },
  routeRules: {
    '/': {
      redirect: '/product',
    },
  },
  buildDir: '.nuxt',
  vite: {
    plugins: [svgLoader()],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        strictNullChecks: true,
      },
    },
  },
  runtimeConfig: {
    public: {
      siteTitle: 'Catalog-Product',
    },
  },
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores'],
  },
})
