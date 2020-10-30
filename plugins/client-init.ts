import { defineNuxtPlugin } from '@nuxtjs/composition-api'

import { postsStore, GetterType as PostsGetterType } from '@/store/posts'

export default defineNuxtPlugin((context) => {
  const arePostsEmpty = context.store.getters[
    `${postsStore}/${PostsGetterType.POST_ARE_EMPTY}`
  ] as boolean

  if (process.client && arePostsEmpty) {
    context.store.dispatch('nuxtServerInit', context)
  }
})
