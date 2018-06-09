import { connect } from "react-redux";
import { actions as ui } from "modules/common/ducks/ui";
import Layout from "./Layout";

const mapStateToProps = store => {
  return {
    snackbarMessage: store.Ui.snackbarMessage,
    popupSnackbar: store.Ui.popupSnackbar,
    clickActionButton: store.Ui.clickActionButton
  };
};

const mapDispatchToProps = {
  closeSnackbar: ui.closeSnackbar,
  openActionButton: ui.openActionButton,
  closeActionButton: ui.closeActionButton
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
