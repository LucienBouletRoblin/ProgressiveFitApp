import * as types from "./types";
import db from "modules/common/db";

export const addTrainingSet = newTrainingSet => {
  db.table("trainingSet").add(newTrainingSet);
  return dispatch => {
    dispatch({
      type: types.ADD_TRAINING_SET,
      payload: newTrainingSet
    });
  };
};

export const getFromDbTrainingSet = trainingSetDB => {
  return dispatch => {
    dispatch({
      type: types.GET_TRAINING_SET,
      payload: trainingSetDB
    });
  };
};
