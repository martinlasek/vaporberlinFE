import axios from 'axios';
import store from '../store/index';
import router from '../router/index';

const BASE_URL = 'http://127.0.0.1:8020';
const POST_URL_REGISTER = BASE_URL + '/api/user';
const POST_URL_LOGIN = BASE_URL + '/api/login';

axios.defaults.baseURL = BASE_URL;

//pragma mark - public

/**
 *
 * @param username: email of the user
 * @param password: password of the user
 * @param callback: function to fire after successful response
 */
export function register(username, password, callback) {

  const json = {email: username, password: password};

  axios
    .post(
      POST_URL_REGISTER,
      json
    )
    .then(resp => {
      const normedResp = normResponse(resp);
      callback(normedResp)
    })
    .catch(error => {
      const normedResp = normResponse(error);
      callback(normedResp)
    })
  ;
}

/**
 *
 * @param username: email of the user
 * @param password: password of the user
 * @param callback: function to fire after successful response
 */
export function login(username, password, callback) {

  axios.defaults.headers.common['Authorization'] = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  axios
    .post(POST_URL_LOGIN)
    .then(response => {
      const normedResp = normResponse(response);
      callback(normedResp);
    })
    .catch(error => {
      const normedResp = normResponse(error);
      callback(normedResp);
    })
  ;
}

export function logout() {
  store.dispatch('clearToken');
  router.push({name: 'login'});
}

/**
 * checks if token is set
 * @returns {boolean}
 */
export function isAuthenticated() {
  const token = store.getters.getToken;
  console.log(token);
  return token !== '';
}

//pragma mark - private

/**
 * creates an object out of response
 * - success: {status, error, data}
 * - error: {status, error, messages}
 */
function normResponse(resp) {
  let normedResponse = {};
  
  /** check if error is of: network error */
  if (resp.message !== undefined) {
    if (resp.message === 'Network Error') {
      normedResponse.status = 400;
      normedResponse.error = true;
      normedResponse.messages = ['Network Error. Do you have access to the internet?'];
      return normedResponse;
    }
  }

  /** check if error is of: not authenticated */
  if (resp.response !== undefined) {
    if (resp.response.status === 401) {
      normedResponse.status = 401;
      normedResponse.error = true;
      normedResponse.messages = ['Invalid credentials.'];
      return normedResponse;
    }
  }

  if (resp.data !== undefined) {
    if (resp.data.status === 409) {
      normedResponse.status = 409;
      normedResponse.error = true;
      normedResponse.messages = [resp.data.message];
      return normedResponse;
    }

    if (resp.data.status === 406) {
      normedResponse.status = 406;
      normedResponse.error = true;
      normedResponse.messages = [resp.data.message];
      return normedResponse;
    }

    /** if here, assume everything went fine */
    normedResponse.status = 200;
    normedResponse.error = false;
    normedResponse.data = resp.data;
    return normedResponse;
  }

  console.log(resp);
  throw new Error('Could not handle response.')
}