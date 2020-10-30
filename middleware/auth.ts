import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

import { authStore, GetterType as AuthGetterType } from '@/store/auth'

export const name = 'auth'

export default defineNuxtMiddleware((context) => {
  const userIsAuthenticated = context.store.getters[
    `${authStore}/${AuthGetterType.IS_AUTHENTICATED}`
  ] as boolean

  if (!userIsAuthenticated) {
    context.redirect('/admin/auth')
  }
})
