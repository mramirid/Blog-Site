import { GetterTree, ActionTree, MutationTree } from 'vuex'

import {
  FirebaseSignupResponseBody,
  FirebaseAuthRequestBody,
  FirebaseSigninResponseBody,
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
  LOGIN: 'signIn',
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
  async [ActionType.LOGIN](_, userAuthInput: UserAuthInput) {
    try {
      const response = await this.$axios.post<FirebaseSigninResponseBody>(
        this.app.$config.firebaseLoginURL + this.app.$config.firebaseKey,
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
        case 'EMAIL_NOT_FOUND':
          throw new Error('There is no user registered with that email address')
        case 'INVALID_PASSWORD':
          throw new Error('The password is invalid')
        case 'USER_DISABLED':
          throw new Error(
            'The user account has been disabled by an administrator'
          )
        default:
          throw error
      }
    }
  },
}
