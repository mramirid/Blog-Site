import Vuex from 'vuex'

import Post from '@/models/Post'

interface State {
  loadedPosts: Post[]
}

export default function createStore() {
  return new Vuex.Store<State>({
    state: {
      loadedPosts: [],
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      postsAreEmpty(state) {
        return state.loadedPosts.length <= 0
      },
    },
    mutations: {
      setPosts(state, posts: Post[]) {
        state.loadedPosts = posts
      },
    },
    actions: {
      setPosts(vuexContext, posts: Post[]) {
        vuexContext.commit('setPosts', posts)
      },
    },
  })
}
