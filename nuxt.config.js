export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Blog Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cool blog site' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/core-components.ts', '@/plugins/date-filter.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: process.env.VUE_APP_FIREBASE_URL,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  env: {
    firebaseUrl: process.env.VUE_APP_FIREBASE_URL,
  },

  publicRuntimeConfig: {
    firebaseUrl: process.env.VUE_APP_FIREBASE_URL,
  },

  privateRuntimeConfig: {
    firebaseKey: process.env.VUE_APP_FIREBASE_KEY,
  },

  loading: { color: 'green', height: '5px' },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
}
