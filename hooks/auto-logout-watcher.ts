import { computed, useContext, watch } from '@nuxtjs/composition-api'

import { authStore, GetterType as AuthGetterType } from '@/store/auth'

export default function useAutoLogoutWatcher() {
  const { store, app } = useContext()

  const didAutoLogout = computed(() => {
    return store.getters[
      `${authStore}/${AuthGetterType.DID_AUTO_LOGOUT}`
    ] as boolean
  })

  watch(didAutoLogout, () => {
    app.router?.replace('/admin/auth')
  })
}
