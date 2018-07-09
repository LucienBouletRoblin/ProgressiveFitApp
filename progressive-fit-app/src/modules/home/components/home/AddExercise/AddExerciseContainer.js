import { connect } from "react-redux";
import AddExercise from "./AddExercise";
import { actions as exercise } from "modules/home/ducks/exercise";
import { actions as ui } from "modules/common/ducks/ui";

const mapStateToProps = store => {
  return {
    clickActionButton: store.Ui.clickActionButton,
    selectedTrainingSet: store.TrainingSet.selectedTrainingSet,
    trainingSet: store.TrainingSet.trainingSet
  };
};

const mapDispatchToProps = {
  addExercise: exercise.addExercise,
  openActionButton: ui.openActionButton,
  closeActionButton: ui.closeActionButton
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExercise);
