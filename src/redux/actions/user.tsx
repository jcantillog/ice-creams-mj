import { SET_USER_LOGIN, SET_USER_LOGOUT } from "../types";

/**
 * Set the login/logout, based on data value.
 * @param {Object} data Data that was obtained from the login
 */
export function setAuth(data: any) {
  const loginData = setUserProfile(data);
  return (dispatch: any) => {
    return dispatch(loginData);
  };
}

/**
 * Set the user auth data
 * @param {Object} userData Data that was obtained from the login
 */
export function setUserProfile(userData: any) {
  return {
    type: userData ? SET_USER_LOGIN : SET_USER_LOGOUT,
    data: userData
  };
}

export default {
  setAuth,
  setUserProfile
};
