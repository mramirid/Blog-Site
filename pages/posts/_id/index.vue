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
import {
  defineComponent,
  computed,
  useAsync,
  useContext,
} from '@nuxtjs/composition-api'

import Post from '@/models/Post'

export default defineComponent({
  setup() {
    const context = useContext()

    const loadingPost = useAsync(async () => {
      try {
        return await new Promise<Post>((resolve, reject) => {
          setTimeout(() => {
            try {
              resolve({
                id: '1',
                title: `Hello world ID: ${context.params.value.id}`,
                previewText: 'This is my first post!',
                content:
                  'This is my first post! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                thumbnailLink: 'https://nuxtjs.org/nuxt-card.png',
                author: 'mramirid',
                updatedDate: new Date().toDateString(),
              })
            } catch (error) {
              reject(error)
            }
          }, 1500)
        })
      } catch (error) {
        context.error(error)
      }
    })

    const loadedPost = computed<Post>(() => {
      return {
        id: loadingPost.value?.id || '',
        title: loadingPost.value?.title || '',
        previewText: loadingPost.value?.content || '',
        content: loadingPost.value?.content || '',
        thumbnailLink: loadingPost.value?.thumbnailLink || '',
        author: loadingPost.value?.author || '',
        updatedDate: loadingPost.value?.updatedDate || '',
      }
    })

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
