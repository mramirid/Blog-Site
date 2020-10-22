import { useAsync, useContext } from '@nuxtjs/composition-api'

import { PostPreview } from '@/models/Post'

export default function usePostPreviews() {
  const loadedPosts = useAsync<PostPreview[]>(() => {
    const context = useContext()
    console.log('context:', context)

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
}
