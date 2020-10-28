import { GetterTree, ActionTree, MutationTree } from 'vuex'

import Post, { RawPost } from '@/models/Post'
import { RootState } from './index'

/*
 * Namespace
 */
export const postsStore = 'posts'

/*
 * State
 */
export const state = () => ({
  loadedPosts: [] as Post[],
})

export type PostsState = ReturnType<typeof state>

/*
 * Getters
 */
export const GetterType = {
  LOADED_POSTS: 'loadedPosts',
  POST_ARE_EMPTY: 'postsAreEmpty',
  POST_BY_ID: 'postById',
}

export const getters: GetterTree<PostsState, RootState> = {
  [GetterType.LOADED_POSTS](state) {
    return state.loadedPosts
  },
  [GetterType.POST_ARE_EMPTY](state) {
    return state.loadedPosts.length <= 0
  },
  [GetterType.POST_BY_ID](state) {
    return (id: string) => {
      return state.loadedPosts.find((post) => post.id === id)
    }
  },
}

/*
 * Mutations
 */
export const MutationType = {
  SET_POSTS: 'setPosts',
  ADD_POST: 'addPosts',
  EDIT_POST: 'editPosts',
}

export const mutations: MutationTree<PostsState> = {
  [MutationType.SET_POSTS](state, posts: Post[]) {
    state.loadedPosts = posts
  },
  [MutationType.ADD_POST](state, newPost: Post) {
    state.loadedPosts.push(newPost)
  },
  [MutationType.EDIT_POST](state, updatedPost: Post) {
    const postIndex = state.loadedPosts.findIndex((post) => {
      return post.id === updatedPost.id
    })
    state.loadedPosts[postIndex] = updatedPost
  },
}

/*
 * Actions
 */
export const ActionType = {
  SET_POSTS: 'setPosts',
  ADD_POST: 'addPosts',
  EDIT_POST: 'editPosts',
}

interface FirebaseAddPostResponse {
  name: string
}

export const actions: ActionTree<PostsState, RootState> = {
  [ActionType.SET_POSTS](vuexContext, posts: Post[]) {
    vuexContext.commit(MutationType.SET_POSTS, posts)
  },
  async [ActionType.ADD_POST](vuexContext, newPost: RawPost) {
    const response = await this.$axios.post<FirebaseAddPostResponse>(
      `${process.env.firebaseUrl}/posts.json`,
      newPost
    )

    if (response.statusText !== 'OK') {
      throw new Error('Could not save post')
    }

    vuexContext.commit(MutationType.ADD_POST, {
      id: response.data.name,
      ...newPost,
    } as Post)
  },
  async [ActionType.EDIT_POST](vuexContext, updatedPost: Post) {
    await this.$axios.put(
      `${process.env.firebaseUrl}posts/${updatedPost.id}.json`,
      updatedPost
    )
    vuexContext.commit(MutationType.EDIT_POST, updatedPost)
  },
}
