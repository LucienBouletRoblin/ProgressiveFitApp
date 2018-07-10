import { connect } from "react-redux";
import Set from "./Set";
import { actions as trainingSet } from "modules/home/ducks/trainingSet";
import { actions as exercise } from "modules/home/ducks/exercise";
import { actions as set } from "modules/home/ducks/exercise";

const mapStateToProps = store => {
  return {
    selectedTrainingSet: store.TrainingSet.selectedTrainingSet,
    exercises: store.Exercise.exercises,
    trainingSet: store.TrainingSet.trainingSet
  };
};
const mapDispatchToProps = {
  selectTrainingSet: trainingSet.selectTrainingSet,
  getFromDbExerciseByTrainingSetId: exercise.getFromDbExerciseByTrainingSetId,
  addSet: set.addSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Set);
