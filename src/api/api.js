import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8020';
const POST_URL_LOGIN = BASE_URL + '/api/login';

axios.defaults.baseURL = BASE_URL;

export function login(username, password, callback) {

  axios.defaults.headers.common['Authorization'] = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

  axios.post(
    POST_URL_LOGIN,
  ).then(response => {

    callback(response);
  }).catch(error => {

    console.log(error);
  });
}