import { useAsync, useContext } from '@nuxtjs/composition-api'

import { PostPreview } from '@/models/Post'

export default function usePostPreviews() {
  const context = useContext()

  const loadedPosts = useAsync(async () => {
    try {
      return await new Promise<PostPreview[]>((resolve, reject) => {
        setTimeout(() => {
          try {
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
          } catch (error) {
            reject(error)
          }
        }, 1500)
      })
    } catch (error) {
      context.error(error)
    }
  })

  return {
    loadedPosts,
  }
}
