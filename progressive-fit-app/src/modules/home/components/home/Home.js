import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import Layout from "modules/common/components/Layout";

class Home extends React.Component {
  componentDidMount() {
    document.title = "ProgressiveFitApp";
    this.props.getFromDbTrainingSet();
  }

  render() {
    return (
      <Layout
        content={<Main trainingSet={this.props.trainingSet} />}
        sidebar={<SideBar trainingSet={this.props.trainingSet} />}
      />
    );
  }
}

export default Home;
