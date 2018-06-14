import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { actions as trainingSet } from "modules/home/ducks/trainingSet";
import { actions as ui } from "modules/common/ducks/ui";

const mapStateToProps = store => {
  return {
    clickActionButton: store.Ui.clickActionButton
  };
};

const mapDispatchToProps = {
  addTrainingSet: trainingSet.addTrainingSet,
  openActionButton: ui.openActionButton,
  closeActionButton: ui.closeActionButton
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionButton);
