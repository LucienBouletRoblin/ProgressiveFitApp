import * as types from "./types";

const initialState = {
  exercises: [],
  addingExercise: false,
  removingExercise: false,
  gettingExercises: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EXERCISE: {
      return {
        ...state,
        addingExercise: true
      };
    }
    case types.ADD_EXERCISE_SUCCESS: {
      return {
        ...state,
        addingExercise: false
      };
    }
    case types.REMOVE_EXERCISE: {
      return {
        ...state,
        removingExercise: true
      };
    }
    case types.REMOVE_EXERCISE_SUCCESS: {
      return {
        ...state,
        removingExercise: false
      };
    }
    case types.GET_EXERCISES: {
      return {
        ...state,
        gettingExercises: true
      };
    }
    case types.GET_EXERCISES_SUCCESS: {
      return {
        ...state,
        exercises: action.payload,
        gettingExercises: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
