<template>
  <main class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <post-list :posts="loadedPosts || []" />
  </main>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api'

import PostList from '@/components/posts/PostList.vue'
import { PostPreview } from '@/models/Post'

export default defineComponent({
  components: {
    PostList,
  },
  setup() {
    const loadedPosts = useAsync<PostPreview[]>(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: '1',
              title: 'Hello world',
              previewText: 'This is my first post!',
              thumbnailLink: 'https://nuxtjs.org/nuxt-card.png',
              author: 'mramirid',
            },
            {
              id: '2',
              title: 'Hi There',
              previewText: 'This is my second post!',
              thumbnailLink:
                'https://vue-view.com/wp-content/uploads/2020/06/Nuxt-js-1024x617.jpg',
              author: 'amir.hakim',
            },
          ])
        }, 1500)
      })
    })

    return {
      loadedPosts,
    }
  },
})
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
