import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

export default defineNuxtMiddleware((context) => {
  console.log('[Middleware] The log middleware is running:', context)
})
