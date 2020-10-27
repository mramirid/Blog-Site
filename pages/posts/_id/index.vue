<template>
  <main class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPost.updatedDate }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@gmail.com">feedback@gmail.com</a>
      </p>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

import { postsStore, GetterType } from '@/store/posts'
import Post from '~/models/Post'

export default defineComponent({
  setup() {
    const { store, params, error } = useContext()

    const postId = params.value.id
    const loadedPost = store.getters[`${postsStore}/${GetterType.POST_BY_ID}`](
      postId
    ) as Post | undefined

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
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
