<template>
  <main class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import AdminPostForm from '@/components/admin/AdminPostForm.vue'

export default defineComponent({
  layout: 'admin',
  components: {
    AdminPostForm,
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
