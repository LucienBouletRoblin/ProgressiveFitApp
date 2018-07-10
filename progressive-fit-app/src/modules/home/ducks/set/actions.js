import * as types from "./types";
import db from "modules/common/db";

export const addSet = newSet => {
  return dispatch => {
    dispatch({
      type: types.ADD_SET
    });
    db.table("Set")
      .add(newSet)
      .then(() => {
        dispatch({
          type: types.ADD_SET_SUCCESS
        });
        dispatch(getFromDbSets());
      })
      .catch(error => {
        console.error(error.stack || error);
      });
  };
};

export const getFromDbSets = () => {
  return dispatch => {
    dispatch({
      type: types.GET_SETS
    });
    db.table("Set")
      .toArray()
      .then(Sets => {
        dispatch({
          type: types.GET_SETS_SUCCESS,
          payload: Sets
        });
      })
      .catch(error => {
        console.error(error.stack || error);
      });
  };
};

export const getFromDbSetByTrainingSetId = trainingSetId => {
  return dispatch => {
    dispatch({
      type: types.GET_SETS_BY_TRAINING_SET_ID
    });
    db.table("Set")
      .where({ trainingSetId: trainingSetId })
      .toArray()
      .then(Sets => {
        dispatch({
          type: types.GET_SETS_BY_TRAINING_SET_ID_SUCCESS,
          payload: Sets
        });
      })
      .catch(error => {
        console.error(error.stack || error);
      });
  };
};

export const removeSet = SetIdToRemove => {
  return dispatch => {
    dispatch({
      type: types.REMOVE_Set
    });
    db.table("Set")
      .delete(SetIdToRemove)
      .then(() => {
        dispatch({
          type: types.REMOVE_Set_SUCCESS
        });
        dispatch(getFromDbSets());
      })
      .catch(error => {
        console.error(error.stack || error);
      });
  };
};
