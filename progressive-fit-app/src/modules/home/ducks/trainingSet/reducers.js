import * as types from "./types";

const initialState = {
  trainingSet: [],
  selectedTrainingSet: {},
  addingTrainingSet: false,
  selectingTrainingSet: false,
  removingTrainingSet: false,
  gettingTrainingSet: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TRAINING_SET: {
      return {
        ...state,
        addingTrainingSet: true
      };
    }
    case types.ADD_TRAINING_SET_SUCCESS: {
      return {
        ...state,
        trainingSet: [...state.trainingSet, action.payload],
        addingTrainingSet: false
      };
    }

    case types.REMOVE_TRAINING_SET: {
      return {
        ...state,
        removingTrainingSet: true
      };
    }
    case types.REMOVE_TRAINING_SET_SUCCESS: {
      return {
        ...state,
        removingTrainingSet: false,
        selectedTrainingSet:
          state.selectedTrainingSet.id === action.payload && {}
      };
    }
    case types.SELECT_TRAINING_SET: {
      return {
        ...state,
        selectingTrainingSet: true
      };
    }
    case types.SELECT_TRAINING_SET_SUCCESS: {
      return {
        ...state,
        selectedTrainingSet: action.payload,
        selectingTrainingSet: false
      };
    }
    case types.GET_TRAINING_SET: {
      return {
        ...state,
        gettingTrainingSet: true
      };
    }
    case types.GET_TRAINING_SET_SUCCESS: {
      return {
        ...state,
        trainingSet: action.payload,
        gettingTrainingSet: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
