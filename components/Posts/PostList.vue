<template>
  <section class="post-list">
    <post-preview
      id="1"
      :is-edit="isEdit"
      thumbnail="https://nuxtjs.org/nuxt-card.png"
      title="Hello There!"
      preview-text="This is my first post"
    />
    <post-preview
      id="2"
      :is-edit="isEdit"
      thumbnail="https://nuxtjs.org/nuxt-card.png"
      title="My second post"
      preview-text="This is my second post"
    />
    <post-preview
      id="3"
      :is-edit="isEdit"
      thumbnail="https://nuxtjs.org/nuxt-card.png"
      title="Hi!"
      preview-text="This is my third post"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import PostPreview from '@/components/posts/PostPreview.vue'

export default defineComponent({
  components: {
    PostPreview,
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false,
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
