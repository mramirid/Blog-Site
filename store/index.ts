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
    },
    mutations: {
      setPosts(state, posts: Post[]) {
        state.loadedPosts = posts
      },
    },
    actions: {
      setPosts(context, posts: Post[]) {
        context.commit('setPosts', posts)
      },
    },
  })
}
