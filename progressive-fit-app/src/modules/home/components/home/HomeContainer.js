import { connect } from "react-redux";
import Home from "./Home";
import { actions as trainingSet } from "modules/home/ducks/trainingSet";

const mapStateToProps = store => {
  return {
    trainingSet: store.TrainingSet.trainingSet
  };
};

const mapDispatchToProps = {
  getFromDbTrainingSet: trainingSet.getFromDbTrainingSet
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
