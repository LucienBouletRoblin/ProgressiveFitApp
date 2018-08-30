import { connect } from "react-redux";
import AddTrainingSet from "./AddTrainingSet";
import { actions as trainingSet } from "modules/home/ducks/trainingSet";

const mapStateToProps = store => {
  return {
    trainingSet: store.TrainingSet.trainingSet
  };
};

const mapDispatchToProps = {
  addTrainingSet: trainingSet.addTrainingSet,
  getFromDbTrainingSet: trainingSet.getFromDbTrainingSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTrainingSet);
