import { computed, useAsync, useContext } from '@nuxtjs/composition-api'
import axios from 'axios'

import Post, { RawPost } from '~/models/Post'

export default function usePost(id: string) {
  const context = useContext()

  const loadingPost = useAsync<Post | null>(async () => {
    try {
      const response = await axios.get<RawPost>(
        `${context.$config.firebaseUrl}posts/${id}.json`
      )

      if (response.statusText !== 'OK' || !response.data) {
        throw new Error('Could not the post')
      } else {
        return { id, ...response.data }
      }
    } catch (error) {
      context.error(error)
      return null
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
}
