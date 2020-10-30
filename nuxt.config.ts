import { NuxtConfig } from '@nuxt/types'
import axios from 'axios'

import { FirebaseRawPosts } from './models/firebase/FirebaseDatabase'

const nuxtConfig: NuxtConfig = {
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
  plugins: [
    '@/plugins/core-components.ts',
    '@/plugins/date-filter.ts',
    { src: '@/plugins/client-init.ts', ssr: false },
  ],

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

  // nuxt/axios Options
  axios: {
    baseURL: process.env.FIREBASE_DB_URL,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Environment Variables ($config object)
  publicRuntimeConfig: {
    firebaseSignUpURL: process.env.FIREBASE_SIGN_UP_URL,
    firebaseLoginURL: process.env.FIREBASE_SIGN_IN_WITH_PASSWORD_URL,
    firebaseKey: process.env.FIREBASE_API_KEY,
  },
  privateRuntimeConfig: {},

  // Nuxt Loading Bar
  loading: { color: 'green', height: '5px' },

  // Page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },

  // Global Routes Middlewares
  router: {},

  // Enable Vue Devtools
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

  // Single Page Application
  // ssr: false,

  // Generate static website (Automatically generate for the dynamic routes)
  target: 'static',
  generate: {
    routes: async () => {
      const response = await axios.get<FirebaseRawPosts>(
        `${process.env.FIREBASE_DB_URL}posts.json`
      )
      if (response.statusText !== 'OK') {
        throw new Error('Could not fetch posts')
      }

      const postURLs = Object.keys(response.data || {}).map((key) => {
        return `/posts/${key}`
      })
      return postURLs
    },
  },
}

export default nuxtConfig
