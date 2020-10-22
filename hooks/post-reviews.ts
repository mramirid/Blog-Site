import { useContext, useFetch } from '@nuxtjs/composition-api'

import { PostPreview } from '@/models/Post'

export default function usePostPreviews() {
  const context = useContext()

  if (!context.store.getters.postsAreEmpty) {
    return
  }

  useFetch(async () => {
    try {
      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            context.store.commit('setPosts', [
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
            ] as PostPreview[])
            resolve()
          } catch (error) {
            reject(error)
          }
        }, 1500)
      })
    } catch (error) {
      context.error(error)
    }
  })
}
