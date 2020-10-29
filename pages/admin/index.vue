<template>
  <main class="admin-page">
    <section class="new-post">
      <base-button @click="$router.push('/admin/new-post')">
        Create Post
      </base-button>
      <base-button style="margin-left: 10px" @click="onLogout">
        Logout
      </base-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list is-edit :posts="loadedPosts" />
    </section>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

import Post from '@/models/Post'
import { postsStore, GetterType as PostsGetterType } from '@/store/posts'
import { authStore, ActionType as AuthActionType } from '@/store/auth'
import authMiddleware from '@/middleware/auth'
import checkAuthMiddleware from '@/middleware/check-auth'

export default defineComponent({
  layout: 'admin',
  middleware: [checkAuthMiddleware, authMiddleware],
  setup() {
    const { store, app } = useContext()

    const loadedPosts = computed(() => {
      return store.getters[
        `${postsStore}/${PostsGetterType.LOADED_POSTS}`
      ] as Post[]
    })

    function onLogout() {
      store.dispatch(`${authStore}/${AuthActionType.LOGOUT}`)
      app.router?.replace('/admin/auth')
    }

    return {
      loadedPosts,
      onLogout,
    }
  },
})
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
