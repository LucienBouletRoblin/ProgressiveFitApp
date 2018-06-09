import * as types from "./types";

export const openSnackbar = snackbarMessage => {
  return dispatch => {
    dispatch({
      type: types.SNACKBAR_OPEN,
      payload: snackbarMessage
    });
  };
};

export const closeSnackbar = () => {
  return dispatch => {
    dispatch({
      type: types.SNACKBAR_CLOSE
    });
  };
};

export const openActionButton = () => {
  return dispatch => {
    dispatch({
      type: types.ACTION_BUTTON_OPEN
    });
  };
};

export const closeActionButton = () => {
  return dispatch => {
    dispatch({
      type: types.ACTION_BUTTON_CLOSE
    });
  };
};
