<template>
  <main class="admin-auth-page">
    <section class="auth-container">
      <form @submit.prevent="onSubmit">
        <base-control-input v-model="userAuthInput.email" type="email">
          E-Mail Address
        </base-control-input>
        <base-control-input v-model="userAuthInput.password" type="password">
          Password
        </base-control-input>
        <base-button type="submit">
          {{ loginMode ? 'Login' : 'Sign Up' }}
        </base-button>
        <base-button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="loginMode = !loginMode"
        >
          Switch to {{ loginMode ? 'Signup' : 'Login' }}
        </base-button>
      </form>
    </section>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import { authStore, ActionType as AuthActionType } from '@/store/auth'

import { UserAuthInput } from '@/models/UserAuth'

export default defineComponent({
  name: 'AdminAuthPage',
  layout: 'admin',
  setup() {
    const loginMode = ref(true)
    const userAuthInput = reactive<UserAuthInput>({
      email: '',
      password: '',
    })

    const { store, app } = useContext()

    async function onSubmit() {
      await store.dispatch(
        `${authStore}/${
          loginMode.value ? AuthActionType.LOGIN : AuthActionType.SIGN_UP
        }`,
        userAuthInput
      )
      app.router?.replace('/admin')
    }

    return {
      loginMode,
      userAuthInput,
      onSubmit,
    }
  },
})
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
