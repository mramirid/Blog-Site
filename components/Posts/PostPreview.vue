<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: `url('${post.thumbnailLink}')` }"
      />
      <div class="post-content">
        <h1>{{ post.title }}</h1>
        <p>{{ post.previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'

import { PostPreview } from '@/models/Post'

export default defineComponent({
  name: 'PostPreview',
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    post: {
      type: Object as PropType<PostPreview>,
      required: true,
    },
  },
  setup(props) {
    const postLink = computed(() => {
      return props.isEdit
        ? `/admin/${props.post.id}`
        : `/posts/${props.post.id}`
    })

    return {
      postLink,
    }
  },
})
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
