import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8020';
const POST_URL_REGISTER = BASE_URL + '/api/user';
const POST_URL_LOGIN = BASE_URL + '/api/login';

axios.defaults.baseURL = BASE_URL;

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
    .then(response => {
      callback(response)
    })
    .catch(error => {
      console.log(error)
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

      callback(response);
    })
    .catch(error => {

      const err = {

        data: {

          status: error.response.status,
          message: error.response.statusText
        }
      };

      callback(err);
    })
  ;
}