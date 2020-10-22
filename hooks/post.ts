import { computed, useAsync, useContext } from '@nuxtjs/composition-api'

import Post from '@/models/Post'

export default function usePost() {
  const context = useContext()

  const loadingPost = useAsync(async () => {
    try {
      return await new Promise<Post>((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve({
              id: '1',
              title: `Hello world ID: ${context.params.value.id}`,
              content:
                'This is my first post! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              thumbnailLink: 'https://nuxtjs.org/nuxt-card.png',
              author: 'mramirid',
              updatedDate: new Date(),
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
      content: loadingPost.value?.content || '',
      thumbnailLink: loadingPost.value?.thumbnailLink || '',
      author: loadingPost.value?.author || '',
      updatedDate: loadingPost.value?.updatedDate || '',
    }
  })

  return {
    loadedPost,
  }
}
