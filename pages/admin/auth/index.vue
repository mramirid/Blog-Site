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
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </base-button>
        <base-button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
        >
          Switch to {{ isLogin ? 'Signup' : 'Login' }}
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
import { authStore, ActionType } from '@/store/auth'

import UserAuthInput from '@/models/UserAuthInput'

export default defineComponent({
  name: 'AdminAuthPage',
  layout: 'admin',
  setup() {
    const isLogin = ref(true)
    const userAuthInput = reactive<UserAuthInput>({
      email: '',
      password: '',
    })

    const { store } = useContext()

    function onSubmit() {
      if (!isLogin.value) {
        store.dispatch(`${authStore}/${ActionType.SIGN_UP}`, userAuthInput)
      }
    }

    return {
      isLogin,
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
