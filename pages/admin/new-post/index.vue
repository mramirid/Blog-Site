<template>
  <main class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmitted" />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

import AdminPostForm from '@/components/admin/AdminPostForm.vue'
import { RawPost } from '@/models/Post'
import { postsStore, ActionType as PostsActionType } from '@/store/posts'
import authMiddleware from '@/middleware/auth'
import checkAuthMiddleware from '@/middleware/check-auth'

export default defineComponent({
  layout: 'admin',
  middleware: [checkAuthMiddleware, authMiddleware],
  components: {
    AdminPostForm,
  },
  setup() {
    const { error, app, store } = useContext()

    async function onSubmitted(newPost: RawPost) {
      try {
        await store.dispatch(
          `${postsStore}/${PostsActionType.ADD_POST}`,
          newPost
        )
        app.router?.replace('/admin')
      } catch (err) {
        error(err)
      }
    }

    return {
      onSubmitted,
    }
  },
})
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
