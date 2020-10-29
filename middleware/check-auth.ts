import { defineNuxtMiddleware } from '@nuxtjs/composition-api'

import { authStore, ActionType as AuthActionType } from '@/store/auth'

export const name = 'check-auth'

export default defineNuxtMiddleware((context) => {
  if (process.browser) {
    context.store.dispatch(
      `${authStore}/${AuthActionType.TRY_AUTO_LOGIN}`,
      context.req?.headers.cookie
    )
  }
})
