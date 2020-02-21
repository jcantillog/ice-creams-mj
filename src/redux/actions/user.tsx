import { SET_USER_LOGIN, SET_USER_LOGOUT } from "../types";

/**
 * Set the data when login occurs
 * @param {Object} data Data that was obtained from the login
 */
export function login(data: any) {
  const loginData = setUserProfile(data);
  return (dispatch: any) => {
    return dispatch(loginData);
  };
}

/**
 * Set the data when logout occurs
 */
export function logout() {
  const logoutData = setUserProfile(null);
  return (dispatch: any) => {
    return dispatch(logoutData);
  };
}

/**
 * Set the user profile
 * @param {Object} userData Data that was obtained from the login
 */
export function setUserProfile(userData: any) {
  return {
    type: userData ? SET_USER_LOGIN : SET_USER_LOGOUT,
    data: userData
  };
}

export default {
  login,
  logout,
  setUserProfile
};
