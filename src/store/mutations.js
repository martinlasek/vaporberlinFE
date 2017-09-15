import * as types from './mutation-types'

/**
 * MUTATIONS
 * are to mutate the state directly
 */
export default {

  /** stores user in global state */
  [types.SET_USER] (state, user) {

    state.user = user;
  }
}