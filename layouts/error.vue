<template>
  <main class="error-page">
    <h1>Oops, something went wrong!</h1>
    <p>Back to <a href="/">safety</a>!</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {
    bodyAttrs: {
      class: 'error-layout',
    },
  },
})
</script>

<style scoped>
.error-layout .error-page {
  text-align: center;
}

.error-layout .error-page a {
  text-decoration: none;
  color: red;
}

.error-layout .error-page a:hover,
.error-layout .error-page a:active {
  color: salmon;
}
</style>
