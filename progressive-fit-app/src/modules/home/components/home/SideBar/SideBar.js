import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItems from "./ListItems";
import Save from "@material-ui/icons/Save";
import AddTrainingSet from "./AddTrainingSet";
import RemoveTrainingSet from "./RemoveTrainingSet";

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
              return <ListItems key={set.id} set={set} />;
            })}
          <Divider />
          <AddTrainingSet />
          <Divider />
          <RemoveTrainingSet />
          <Divider />
          <ListItem button onClick={() => console.log("saved!")}>
            <Save />
            <ListItemText primary="Save your data!" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
