<template>
  <main class="admin-auth-page">
    <section class="auth-container">
      <form>
        <base-control-input type="email">E-Mail Address</base-control-input>
        <base-control-input type="password">Password</base-control-input>
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
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AdminAuthPage',
  layout: 'admin',
  setup() {
    const isLogin = ref(true)

    return {
      isLogin,
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
