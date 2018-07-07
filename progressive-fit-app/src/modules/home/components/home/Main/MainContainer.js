import { connect } from "react-redux";
import Main from "./Main";
import { actions as trainingSet } from "modules/home/ducks/trainingSet";
import { actions as exercise } from "modules/home/ducks/exercise";

const mapStateToProps = store => {
  return {
    selectedTrainingSet: store.TrainingSet.selectedTrainingSet,
    exercises: store.Exercise.exercises,
    trainingSet: store.TrainingSet.trainingSet
  };
};
const mapDispatchToProps = {
  selectTrainingSet: trainingSet.selectTrainingSet,
  getFromDbExerciseByTrainingSetId: exercise.getFromDbExerciseByTrainingSetId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
