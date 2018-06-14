import * as types from "./types";

const trainingSet = [
  {
    id: "1",
    name: "Pect/Back",
    exercises: [
      {
        id: "1",
        name: "pect press"
      },
      {
        id: "2",
        name: "pull down"
      }
    ]
  },
  {
    id: "2",
    name: "Bicep/Tricep",
    exercises: [
      {
        id: "3",
        name: "curl"
      },
      {
        id: "4",
        name: "tricep extention"
      },
      {
        id: "5",
        name: "tricep seated"
      }
    ]
  }
];

export const addTrainingSet = () => {
  return dispatch => {
    dispatch({
      type: types.ADD_TRAINING_SET,
      payload: trainingSet
    });
  };
};
