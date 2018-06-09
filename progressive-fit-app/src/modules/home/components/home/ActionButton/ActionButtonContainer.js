import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { actions as home } from "modules/home/ducks/home";

const mapStateToProps = store => {
  return {
    online: store.offline.online
  };
};

const mapDispatchToProps = {
  getPosts: home.getPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionButton);
