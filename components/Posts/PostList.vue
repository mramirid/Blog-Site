<template>
  <section class="post-list">
    <post-preview v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

import PostPreview from '@/components/posts/PostPreview.vue'
import Post from '@/models/Post'

export default defineComponent({
  name: 'PostList',
  components: {
    PostPreview,
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
})
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
