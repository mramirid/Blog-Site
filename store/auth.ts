import { GetterTree, ActionTree, MutationTree } from 'vuex'

import {
  FirebaseSignupResponseBody,
  FirebaseAuthRequestBody,
} from '@/models/firebase/FirebaseAuth'
import UserAuthInput from '@/models/UserAuthInput'
import { RootState } from './index'

/*
 * Namespace
 */
export const authStore = 'auth'

/*
 * State
 */
export const state = () => ({})

export type StoreState = ReturnType<typeof state>

/*
 * Getters
 */
export const getters: GetterTree<StoreState, StoreState> = {}

/*
 * Mutations
 */
export const MutationType = {}

export const mutations: MutationTree<StoreState> = {}

/*
 * Actions
 */
export const ActionType = {
  SIGN_UP: 'signUp',
}

export const actions: ActionTree<StoreState, RootState> = {
  async [ActionType.SIGN_UP](_, userAuthInput: UserAuthInput) {
    try {
      const response = await this.$axios.post<FirebaseSignupResponseBody>(
        this.app.$config.firebaseSignUpURL + this.app.$config.firebaseKey,
        {
          email: userAuthInput.email,
          password: userAuthInput.password,
          returnSecureToken: true,
        } as FirebaseAuthRequestBody
      )

      if (response.status < 400) {
        console.log(response.data)
      } else {
        throw new Error('Failed to login')
      }
    } catch (error) {
      switch (error.response.data.error.message) {
        case 'EMAIL_EXISTS':
          throw new Error('The email is already in use by another account')
        default:
          throw error
      }
    }
  },
}
