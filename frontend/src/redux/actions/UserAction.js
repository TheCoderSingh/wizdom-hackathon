import { SET_USER, CLEAR_SESSION } from "../Types";

export const setUser = (isLoggedIn, name) => (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: { isLoggedIn, name },
  });
};

export const clearSession = () => (dispatch) => {
  dispatch({
    type: CLEAR_SESSION,
  });
};
