import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'

import Post, { RawPost } from '@/models/Post'

export const state = () => ({
  loadedPosts: [] as Post[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  loadedPosts: (state) => state.loadedPosts,
  postsAreEmpty: (state) => state.loadedPosts.length <= 0,
  postById: (state) => (id: string) => {
    return state.loadedPosts.find((post) => post.id === id)
  },
}

export const mutations: MutationTree<RootState> = {
  setPosts: (state, posts: Post[]) => (state.loadedPosts = posts),
}

interface FirebaseRawPosts {
  [id: string]: RawPost
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit(vuexContext, nuxtContext: Context) {
    try {
      const response = await this.$axios.get<FirebaseRawPosts>(
        `${nuxtContext.$config.firebaseUrl}posts.json`
      )

      if (response.statusText !== 'OK') {
        throw new Error('Could not fetch posts')
      }

      const posts = Object.keys(response.data || {}).map<Post>((key) => ({
        id: key,
        ...response.data[key],
      }))
      vuexContext.commit('setPosts', posts)
    } catch (error) {
      nuxtContext.error(error)
    }
  },
}
