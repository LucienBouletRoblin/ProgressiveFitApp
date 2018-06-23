import { connect } from "react-redux";
import RemoveTrainingSet from "./RemoveTrainingSet";
import { actions as trainingSet } from "modules/home/ducks/trainingSet";

const mapStateToProps = store => {
  return {
    trainingSet: store.TrainingSet.trainingSet
  };
};

const mapDispatchToProps = {
  removeTrainingSet: trainingSet.removeTrainingSet,
  getFromDbTrainingSet: trainingSet.getFromDbTrainingSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveTrainingSet);
