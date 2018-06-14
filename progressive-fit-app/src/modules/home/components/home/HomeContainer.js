import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = store => {
  return {
    trainingSet: store.TrainingSet.trainingSet
  };
};

export default connect(mapStateToProps)(Home);
