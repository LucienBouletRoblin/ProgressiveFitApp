import * as types from "./types";
import db from "modules/common/db";

export const addExercise = newExercise => {
  return dispatch => {
    dispatch({
      type: types.ADD_EXERCISE
    });
    db.table("exercise")
      .add(newExercise)
      .then(() => {
        dispatch({
          type: types.ADD_EXERCISE_SUCCESS
        });
        dispatch(getFromDbExercises());
      });
  };
};

export const getFromDbExercises = () => {
  return dispatch => {
    dispatch({
      type: types.GET_EXERCISES
    });
    db.table("exercise")
      .toArray()
      .then(exercises => {
        dispatch({
          type: types.GET_EXERCISES_SUCCESS,
          payload: exercises
        });
      });
  };
};

export const removeExercise = exerciseIdToRemove => {
  return dispatch => {
    dispatch({
      type: types.REMOVE_EXERCISE
    });
    db.table("exercise")
      .delete(exerciseIdToRemove)
      .then(() => {
        dispatch({
          type: types.REMOVE_EXERCISE_SUCCESS
        });
        dispatch(getFromDbExercises());
      });
  };
};
