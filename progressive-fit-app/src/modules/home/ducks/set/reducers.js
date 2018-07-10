import * as types from "./types";

const initialState = {
  sets: [],
  addingSet: false,
  removingSet: false,
  gettingSets: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SET: {
      return {
        ...state,
        addingSet: true
      };
    }
    case types.ADD_SET_SUCCESS: {
      return {
        ...state,
        addingSet: false
      };
    }
    case types.REMOVE_SET: {
      return {
        ...state,
        removingSet: true
      };
    }
    case types.REMOVE_SET_SUCCESS: {
      return {
        ...state,
        removingSet: false
      };
    }
    case types.GET_SETS: {
      return {
        ...state,
        gettingSets: true
      };
    }
    case types.GET_SETS_SUCCESS: {
      return {
        ...state,
        sets: action.payload,
        gettingSets: false
      };
    }
    case types.GET_SETS_BY_TRAINING_SET_ID: {
      return {
        ...state,
        gettingSets: true
      };
    }
    case types.GET_SETS_BY_TRAINING_SET_ID_SUCCESS: {
      return {
        ...state,
        sets: action.payload,
        gettingSets: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
