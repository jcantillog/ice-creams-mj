import { SET_USER_LOGIN } from "../types";

/**
 * Set the user profile
 * @param {Object} userData Data that was obtained from the login
 */
export function setUserProfile(userData: any) {
  return {
    type: SET_USER_LOGIN,
    data: userData
  };
}

export default {
  setUserProfile
};
