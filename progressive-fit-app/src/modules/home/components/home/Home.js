import React from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import Layout from "modules/common/components/Layout";
import db from "modules/common/db";

class Home extends React.Component {
  componentDidMount() {
    document.title = "ProgressiveFitApp";
    db.table("trainingSet")
      .toArray()
      .then(trainingSet => {
        this.props.getFromDbTrainingSet(trainingSet);
      });
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
