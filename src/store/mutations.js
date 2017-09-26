import * as types from './mutation-types'

/**
 * MUTATIONS
 * are to mutate the state directly
 */
export default {

  /** stores user in global state */
  [types.SET_USER] (state, user) {
    state.user = user;
  },

  /** removes user from global state */
  [types.CLEAR_USER] (state) {
    state.user = {};
  },

  /** stores the user token in global state */
  [types.SET_TOKEN] (state, token) {
    state.token = token;
  },

  /** removes the user token from global state */
  [types.CLEAR_TOKEN] (state) {
    state.token = '';
  },

  /** stores the topic list in global state */
  [types.SET_TOPIC_LIST] (state, list) {
    state.topicList = list;
  }
}