import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8020';
const POST_URL_REGISTER = BASE_URL + '/api/user';
const POST_URL_LOGIN = BASE_URL + '/api/login';

axios.defaults.baseURL = BASE_URL;

//pragma mark - private

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

      const respObj = {status: resp.data.status, data: resp.data};
      callback(respObj)
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
      const normedResp = normResponse(response, 'success');
      callback(normedResp);
    })
    .catch(error => {
      const normedResp = normResponse(error, 'error');
      callback(normedResp);
    })
  ;
}

//pragma mark - private

/**
 * creates an object out of success/error response
 * @param resp
 * @param context
 */
function normResponse(resp, context) {

  let normedResponse = {};

  if(context === 'error') {
    normedResponse.status = resp.response.status;
    normedResponse.message = resp.response.statusText;
    normedResponse.error = true;
  }

  if(context === 'success') {
    normedResponse.status = resp.status;
    normedResponse.error = false;
    normedResponse.data = resp.data;
  }

  return normedResponse;
}