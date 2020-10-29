import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

import { authStore, GetterType as AuthGetterType } from '@/store/auth'

export const name = 'auth'

export default defineNuxtMiddleware((context) => {
  const userToken =
    context.store.getters[`${authStore}/${AuthGetterType.TOKEN}`]

  if (!userToken) {
    context.redirect('/admin/auth')
  }
})
