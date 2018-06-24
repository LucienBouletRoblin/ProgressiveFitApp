import * as types from "./types";
import db from "modules/common/db";

export const addTrainingSet = newTrainingSet => {
  return dispatch => {
    dispatch({
      type: types.ADD_TRAINING_SET
    });
    db.table("trainingSet")
      .add(newTrainingSet)
      .then(
        dispatch({
          type: types.ADD_TRAINING_SET_SUCCESS,
          payload: newTrainingSet
        })
      );
  };
};

export const getFromDbTrainingSet = () => {
  return dispatch => {
    dispatch({
      type: types.GET_TRAINING_SET
    });
    db.table("trainingSet")
      .toArray()
      .then(trainingSet => {
        dispatch({
          type: types.GET_TRAINING_SET_SUCCESS,
          payload: trainingSet
        });
      });
  };
};

export const removeTrainingSet = trainingSetIdToRemove => {
  return dispatch => {
    dispatch({
      type: types.REMOVE_TRAINING_SET
    });
    db.table("trainingSet")
      .delete(trainingSetIdToRemove)
      .then(() => {
        dispatch({
          type: types.REMOVE_TRAINING_SET_SUCCESS
        });
        dispatch(getFromDbTrainingSet());
      });
  };
};

export const selectTrainingSet = selectedTrainingSet => {
  return dispatch => {
    dispatch({
      type: types.SELECT_TRAINING_SET
    });
    dispatch({
      type: types.SELECT_TRAINING_SET_SUCCESS,
      payload: selectedTrainingSet
    });
  };
};
