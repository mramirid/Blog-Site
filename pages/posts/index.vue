<template>
  <main class="posts-page">
    <post-list :posts="loadedPosts" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import PostList from '@/components/posts/PostList.vue'
import usePostPreviews from '@/hooks/post-reviews'

export default defineComponent({
  components: {
    PostList,
  },
  setup() {
    const { loadedPosts } = usePostPreviews()

    return {
      loadedPosts,
    }
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
