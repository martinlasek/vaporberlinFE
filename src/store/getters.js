/**
 * GETTERS
 * are for getting the state
 * but also processed data based on the state
 */

// PRAGMA MARK: User

/** returns the user */
export const getUser = state => state.user;

/** returns the user token */
export const getToken = state => state.token;