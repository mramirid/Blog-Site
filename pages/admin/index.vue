<template>
  <main class="admin-page">
    <section class="new-post">
      <base-button @click="$router.push('/admin/new-post')">
        Create Post
      </base-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-list is-edit />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import BaseButton from '@/components/ui/BaseButton.vue'
import PostList from '@/components/posts/PostList.vue'

export default defineComponent({
  components: {
    BaseButton,
    PostList,
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
