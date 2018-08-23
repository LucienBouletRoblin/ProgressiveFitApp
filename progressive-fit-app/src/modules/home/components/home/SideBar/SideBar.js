import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItems from "./ListItems";
import AddTrainingSet from "./AddTrainingSet";
import RemoveTrainingSet from "./RemoveTrainingSet";
import ImportData from "./ImportData";
import SaveData from "./SaveData";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class SideBar extends React.Component {
  render() {
    const { classes, trainingSet } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          <Divider />
          {trainingSet &&
            trainingSet.map(set => {
              return <ListItems key={set.uid} set={set} />;
            })}
          <Divider />
          <AddTrainingSet />
          <Divider />
          <RemoveTrainingSet />
          <Divider />
          <SaveData />
          <ImportData />
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
