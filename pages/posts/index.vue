<template>
  <main class="posts-page">
    <post-list />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import PostList from '@/components/posts/PostList.vue'

export default defineComponent({
  components: {
    PostList,
  },
})
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
