import { combineReducers } from "redux";

const initAuthState = {
  auth: false,
};

const authReducer = (initAuthState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, auth: true };
    case "LOGOUT":
      return { ...state, auth: false };
    default:
      return state;
  }
};
