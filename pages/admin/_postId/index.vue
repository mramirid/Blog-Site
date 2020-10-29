<template>
  <main class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" @submit="onSubmitted" />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

import AdminPostForm from '@/components/admin/AdminPostForm.vue'
import Post, { RawPost } from '@/models/Post'
import {
  postsStore,
  GetterType as PostsGetterType,
  ActionType as PostsActionType,
} from '@/store/posts'
import authMiddleware from '@/middleware/auth'

export default defineComponent({
  layout: 'admin',
  middleware: authMiddleware,
  components: {
    AdminPostForm,
  },
  setup() {
    const { store, params, error, app } = useContext()

    const postId = params.value.postId

    const loadedPost = store.getters[
      `${postsStore}/${PostsGetterType.POST_BY_ID}`
    ](postId) as Post | undefined

    if (!loadedPost) {
      error(new Error('Post not found!'))
    }

    async function onSubmitted(updatedPost: RawPost) {
      try {
        await store.dispatch(`${postsStore}/${PostsActionType.EDIT_POST}`, {
          id: postId,
          ...updatedPost,
        } as Post)
        app.router?.replace('/admin')
      } catch (err) {
        error(err)
      }
    }

    return {
      loadedPost,
      onSubmitted,
    }
  },
})
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
