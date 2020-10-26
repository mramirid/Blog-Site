<template>
  <main class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

import AdminPostForm from '@/components/admin/AdminPostForm.vue'
import Post from '~/models/Post'

export default defineComponent({
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  setup() {
    const { store, params, error } = useContext()

    const postId = params.value.postId
    const loadedPost = store.getters.postById(postId) as Post | undefined
    if (!loadedPost) {
      error(new Error('Post not found!'))
    }

    return {
      loadedPost,
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
