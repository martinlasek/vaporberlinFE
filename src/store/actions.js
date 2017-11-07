import * as types from './mutation-types'

/**
 *  ACTIONS
 *  are a bridge used to mutate the state
 */

//pragma mark - User

/** store: user */
export const setUser = (state, user) => {
  delete user.password;
  state.commit(types.SET_USER, user);
};

/** store: user email */
export const setUserEmail = (state, email) => {
  state.commit(types.SET_USER_EMAIL, email);
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

//pragma mark - Topic

/** store: topic list */
export const setTopicList = (state, list) => {
  state.commit(types.SET_TOPIC_LIST, list);
};

/** store: upcoming meetup */
export const setUpcomingMeetup = (state, upcomingMeetup) => {
  state.commit(types.SET_UPCOMING_MEETUP, upcomingMeetup);
};
