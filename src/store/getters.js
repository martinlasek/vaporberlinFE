/**
 * GETTERS
 * are for getting the state
 * but also processed data based on the state
 */

//pragma mark - User

/** returns the user */
export const getUser = state => state.user;

//pragma mark - Token

/** returns the user token */
export const getToken = state => state.token;

//pragma mark - Topic

/** returns the topic list */
export const getTopicList = state => state.topicList;
