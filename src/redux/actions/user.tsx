import { SET_USER_LOGIN, SET_USER_LOGOUT } from "../types";

/**
 * Set the data when login occurs
 * @param {Object} data Data that was obtained from the login
 */
export function login(data: any) {
  return (dispatch: any) => {
    dispatch(setUserProfile(data));
  };
}

/**
 * Set the data when logout occurs
 */
export function logout() {
  return (dispatch: any) => {
    dispatch(setUserProfile(null, false));
  };
}

/**
 * Set the user profile
 * @param {Object} userData Data that was obtained from the login
 */
export function setUserProfile(userData: any, login: boolean = true) {
  return {
    type: login ? SET_USER_LOGIN : SET_USER_LOGOUT,
    data: userData
  };
}

export default {
  login,
  logout,
  setUserProfile
};
