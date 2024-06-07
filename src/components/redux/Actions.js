import {
  BOOK_NOW,
  LOGIN_USER,
  REGISTER_USER,
  SHOW_SERVICE,
} from "./ActionsNames";

export const showService = (id) => {
  return {
    type: SHOW_SERVICE,
    payload: id,
  };
};

export const registerUser = (username, password, confirmPassword) => {
  return {
    type: REGISTER_USER,
    payload: { username, password, confirmPassword },
  };
};

export const loginUser = (username, password) => {
  return {
    type: LOGIN_USER,
    payload: { username, password },
  };
};
