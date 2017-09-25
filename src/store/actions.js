import * as types from './mutation-types'

/**
 *  ACTIONS
 *  are a bridge used to mutate the state
 */

//pragma mark - User

/** invokes the mutation to set the user */
export const setUser = (state, user) => {
  state.commit(types.SET_USER, user);
};

/** invokes the mutation to clear the user */
export const clearUser = (state) => {
  state.commit(types.CLEAR_USER);
};

//pragma mark - Token

/** invokes the mutation to set the user token */
export const setToken = (state, token) => {
  state.commit(types.SET_TOKEN, token);
};

/** invokes the mutation to clear the user token */
export const clearToken = (state) => {
  state.commit(types.CLEAR_TOKEN);
};