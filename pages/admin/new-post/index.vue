<template>
  <main class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmitted" />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import axios from 'axios'

import AdminPostForm from '@/components/admin/AdminPostForm.vue'
import { InputPost } from '@/models/Post'

export default defineComponent({
  layout: 'admin',
  components: {
    AdminPostForm,
  },
  setup() {
    const { $config } = useContext()

    async function onSubmitted(newPost: InputPost) {
      try {
        const response = await axios.post(
          `${$config.firebaseUrl}posts.json`,
          newPost
        )
        console.log(response)
      } catch (error) {
        console.log(error)
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
