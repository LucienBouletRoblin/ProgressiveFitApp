import { connect } from "react-redux";
import ListItems from "./ListItems";
import { actions as trainingSet } from "modules/home/ducks/trainingSet";

const mapStateToProps = store => {
  return {
    trainingSet: store.TrainingSet.trainingSet
  };
};
const mapDispatchToProps = {
  selectTrainingSet: trainingSet.selectTrainingSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
