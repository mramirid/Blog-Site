import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'

import Post, { RawPost } from '@/models/Post'
import axios from 'axios'

export const state = () => ({
  loadedPosts: [] as Post[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  loadedPosts: (state) => state.loadedPosts,
  postsAreEmpty: (state) => state.loadedPosts.length <= 0,
}

export const mutations: MutationTree<RootState> = {
  SET_POSTS: (state, posts: Post[]) => (state.loadedPosts = posts),
}

type FirebaseRawCoaches = {
  [id: string]: RawPost
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit(vuexContext, nuxtContext: Context) {
    const response = await axios.get<FirebaseRawCoaches>(
      `${nuxtContext.$config.firebaseUrl}posts.json`
    )

    if (response.statusText === 'OK') {
      const posts = Object.keys(response.data || {}).map<Post>((key) => ({
        id: key,
        ...response.data[key],
      }))
      vuexContext.commit('SET_POSTS', posts)
    } else {
      throw new Error('Could not save data')
    }
  },
  setPosts(vuexContext, posts: Post[]) {
    vuexContext.commit('SET_POSTS', posts)
  },
}
