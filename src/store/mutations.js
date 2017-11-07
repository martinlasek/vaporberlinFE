import * as types from './mutation-types'
import {emptyUser} from './empty-objects'

/**
 * MUTATIONS
 * are to mutate the state directly
 */
export default {

// pragma mark - user

  /** stores: user */
  [types.SET_USER] (state, user) {
    state.user = user;
  },

  /** stores: user email  */
  [types.SET_USER_EMAIL] (state, email) {
    state.user.email = email;
  },

  /** removes: user */
  [types.CLEAR_USER] (state) {
    state.user = emptyUser;
  },

// pragma mark - token

  /** stores: user token */
  [types.SET_TOKEN] (state, token) {
    state.token = token;
  },

  /** removes: user token */
  [types.CLEAR_TOKEN] (state) {
    state.token = '';
  },

// pragma mark - topic

  /** stores: topic list */
  [types.SET_TOPIC_LIST] (state, list) {
    state.topicList = list;
  },

// pragma mark - topic

  [types.SET_UPCOMING_MEETUP] (state, upcomingMeetup) {
    state.meetup = upcomingMeetup;
  }
}
