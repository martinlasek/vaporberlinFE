import * as types from './mutation-types'

/**
 *  ACTIONS
 *  are a bridge used to mutate the state
 */

// PRAGMA MARK: User

/** invokes the mutation to set the user */
export const setUser = (state, user) => {

  state.commit(types.SET_USER, user)
};
