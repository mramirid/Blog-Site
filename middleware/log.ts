import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

export const name = 'log'

export default defineNuxtMiddleware((_) => {
  console.log('[Middleware] The log middleware is running')
})
