import { combineReducers } from "redux";
import { ActionInterface, SET_USER_LOGIN, SET_USER_LOGOUT } from "../types";

const authenticated = (state: boolean = false, action: ActionInterface) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return true;

    case SET_USER_LOGOUT:
      return false;

    default:
      return state;
  }
};

const data = (state: any = {}, action: ActionInterface) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return action.data;

    default:
      return state;
  }
};

const user = combineReducers({
  authenticated,
  data
});

export default user;
