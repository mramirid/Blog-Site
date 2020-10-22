import Vuex from 'vuex'
import { Context } from '@nuxt/types'

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
      async nuxtServerInit(vuexContext, nuxtContext: Context) {
        try {
          return await new Promise((resolve, reject) => {
            setTimeout(() => {
              try {
                vuexContext.commit('setPosts', [
                  {
                    id: '1',
                    title: 'Hello world',
                    previewText: 'This is my first post!',
                    content:
                      'This is my first post! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    thumbnailLink: 'https://nuxtjs.org/nuxt-card.png',
                    author: 'mramirid',
                    updatedDate: new Date().toDateString(),
                  },
                  {
                    id: '2',
                    title: 'Hi There',
                    previewText: 'This is my second post!',
                    content:
                      'This is my second post! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    thumbnailLink:
                      'https://vue-view.com/wp-content/uploads/2020/06/Nuxt-js-1024x617.jpg',
                    author: 'amir.hakim',
                    updatedDate: new Date().toDateString(),
                  },
                ] as Post[])
                resolve()
              } catch (error) {
                reject(error)
              }
            }, 1500)
          })
        } catch (error) {
          nuxtContext.error(error)
        }
      },
      setPosts(vuexContext, posts: Post[]) {
        vuexContext.commit('setPosts', posts)
      },
    },
  })
}
