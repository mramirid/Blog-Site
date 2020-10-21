<template>
  <main>
    <nuxt />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {
    bodyAttrs: {
      class: 'home',
    },
  },
})
</script>
