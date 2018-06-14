import * as types from "./types";

const initialState = {
  trainingSet: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TRAINING_SET: {
      return {
        ...state,
        trainingSet: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
