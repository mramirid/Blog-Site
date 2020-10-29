<template>
  <main class="posts-page">
    <post-list :posts="loadedPosts" />
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

import Post from '@/models/Post'
import { postsStore, GetterType } from '@/store/posts'

export default defineComponent({
  setup() {
    const { store } = useContext()
    const loadedPosts = computed(() => {
      return store.getters[`${postsStore}/${GetterType.LOADED_POSTS}`] as Post[]
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
