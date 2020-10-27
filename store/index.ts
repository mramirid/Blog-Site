import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Context } from '@nuxt/types'

import { postsStore, ActionType as PostsAction } from './posts'
import Post, { RawPost } from '~/models/Post'

/*
 * State
 */
export const state = () => ({})

export type RootState = ReturnType<typeof state>

/*
 * Getters
 */
export const getters: GetterTree<RootState, RootState> = {}

/*
 * Mutations
 */
export const MutationType = {}

export const mutations: MutationTree<RootState> = {}

/*
 * Actions
 */
export const ActionType = {}

export interface FirebaseRawPosts {
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
      vuexContext.commit(`${postsStore}/${PostsAction.SET_POSTS}`, posts)
    } catch (error) {
      nuxtContext.error(error)
    }
  },
}
