import { connect } from "react-redux";
import Pect from "./Pect";

const mapStateToProps = store => {
  return {
    gets: store.Home.home
  };
};

export default connect(mapStateToProps)(Pect);
