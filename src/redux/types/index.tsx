export interface ActionInterface {
  type: string;
  data: any;
};

/* User */
export const SET_USER_LOGIN = "SET_USER_LOGIN";
export const SET_USER_LOGOUT = "SET_USER_LOGOUT";