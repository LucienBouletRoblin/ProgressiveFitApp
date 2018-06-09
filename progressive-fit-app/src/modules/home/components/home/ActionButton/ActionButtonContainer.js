import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { actions as home } from "modules/home/ducks/home";
import { actions as ui } from "modules/common/ducks/ui";

const mapStateToProps = store => {
  return {
    online: store.offline.online,
    clickActionButton: store.Ui.clickActionButton
  };
};

const mapDispatchToProps = {
  getPosts: home.getPosts,
  openActionButton: ui.openActionButton,
  closeActionButton: ui.closeActionButton
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionButton);
