import { connect } from "react-redux";
import Main from "./Main";
import { actions as trainingSet } from "modules/home/ducks/trainingSet";

const mapStateToProps = store => {
  return {
    selectedTrainingSet: store.TrainingSet.selectedTrainingSet
  };
};
const mapDispatchToProps = {
  selectTrainingSet: trainingSet.selectTrainingSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
