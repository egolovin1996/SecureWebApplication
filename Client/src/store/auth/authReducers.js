import { 
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT } from '../actionTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.payload.user
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload.user
      };
    case AUTH_LOGIN_FAILURE:
      return { loggedIn: false };
    case AUTH_LOGOUT:
      return { loggedIn: false };
    default:
      return state
  }
}