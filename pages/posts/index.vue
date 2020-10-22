<template>
  <main class="posts-page">
    <post-list :posts="loadedPosts" />
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

import PostList from '@/components/posts/PostList.vue'
import usePostPreviews from '@/hooks/post-reviews'
import { PostPreview } from '@/models/Post'

export default defineComponent({
  components: {
    PostList,
  },
  setup() {
    usePostPreviews()

    const { store } = useContext()
    const loadedPosts = computed(() => {
      return store.getters.loadedPosts as PostPreview[]
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
