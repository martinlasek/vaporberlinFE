import axios from 'axios';
import store from '../store/index';
import router from '../router/index';

//const BASE_URL = 'http://127.0.0.1:8020';

// use for PRODUCTION
const BASE_URL = '';

const POST_URL_REGISTER = BASE_URL + '/api/user';
const POST_URL_LOGIN = BASE_URL + '/api/login';
const GET_URL_USER = BASE_URL + '/api/user';
const GET_URL_TOPIC_LIST = BASE_URL + '/api/topic/list';
const POST_URL_CREATE_TOPIC = BASE_URL + '/api/topic';
const POST_URL_VOTE_TOPIC = BASE_URL + '/api/topic/vote';

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

  const un = username.toLowerCase();
  axios.defaults.headers.common['Authorization'] = 'Basic ' + Buffer.from(un + ':' + password).toString('base64');

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

/**
 * removes token from global state
 */
export function logout() {
  store.dispatch('clearToken');
  store.dispatch('clearUser');
  router.push({name: 'login'});
}

/**
 * fetches the user from api
 */
export function fetchUser() {
  const token = store.getters.getToken;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  axios
    .get(GET_URL_USER)
    .then(response => {
      const normedResp = normResponse(response);
      store.dispatch('setUser', normedResp.data);
    })
    .catch(error => {
      const normedResp = normResponse(error);
      console.log('error', normedResp);
    })
  ;
}

/**
 * fetches topic list from api
 */
export function fetchTopicList() {

  axios
    .get(GET_URL_TOPIC_LIST)
    .then(resp => {
      store.dispatch('setTopicList', resp.data.topics);
    })
    .catch(error => {
      const normedResp = normResponse(error);
      console.log('error', normedResp);
    })
  ;
}

/**
 *
 * @param description
 */
export function createTopic(description) {
  const token = store.getters.getToken;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  axios.post(
    POST_URL_CREATE_TOPIC,
    {description: description}
  ).then(resp => {
    fetchTopicList();
  }).catch(error => {
    console.log(error);
  });
}

export function voteTopic(id) {
  const token = store.getters.getToken;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  axios.post(
    POST_URL_VOTE_TOPIC,
    {topicid: id}
  ).then(resp => {
    fetchTopicList();
  }).catch(error => {
    console.log(error);
  });
}

/**
 * checks if token is set
 * @returns {boolean}
 */
export function isAuthenticated() {
  const token = store.getters.getToken;
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