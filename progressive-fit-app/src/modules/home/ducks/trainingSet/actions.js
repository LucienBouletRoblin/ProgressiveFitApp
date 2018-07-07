import * as types from "./types";
import db from "modules/common/db";
import { actions as exercise } from "modules/home/ducks/exercise";

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
      )
      .catch(error => {
        console.error(error.stack || error);
      });
  };
};

export const getFromDbTrainingSet = (withAutoSelectTrainingSet = null) => {
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
        if (withAutoSelectTrainingSet && trainingSet && trainingSet[0]) {
          dispatch(selectTrainingSet(trainingSet[0]));
        }
      })
      .catch(error => {
        console.error(error.stack || error);
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
      })
      .catch(error => {
        console.error(error.stack || error);
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
    if (selectedTrainingSet.id) {
      dispatch(
        exercise.getFromDbExerciseByTrainingSetId(selectedTrainingSet.id)
      );
    }
  };
};
