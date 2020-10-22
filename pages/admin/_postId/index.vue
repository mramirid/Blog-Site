<template>
  <main class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

import { InputPost } from '@/models/Post.ts'
import AdminPostForm from '@/components/admin/AdminPostForm.vue'

export default defineComponent({
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  setup() {
    const loadedPost = reactive<InputPost>({
      author: 'Amir Hakim',
      title: 'How to use Nuxt with TypeScript?',
      content: 'Super amazing. Nuxt is awesome!',
      thumbnailLink: 'https://nuxtjs.org/nuxt-card.png',
    })

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
