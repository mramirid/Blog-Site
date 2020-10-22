<template>
  <main class="posts-page">
    <post-list :posts="loadedPosts" />
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

import PostList from '@/components/posts/PostList.vue'
import Post from '@/models/Post'

export default defineComponent({
  components: {
    PostList,
  },
  setup() {
    const { store } = useContext()
    const loadedPosts = computed(() => {
      return store.getters.loadedPosts as Post[]
    })

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
