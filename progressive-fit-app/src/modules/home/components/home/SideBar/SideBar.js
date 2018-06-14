import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItems from "./ListItems";
import Save from "@material-ui/icons/Save";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class SideBar extends React.Component {
  state = { openAll: true, open: false };

  handleClickAll = () => {
    this.setState({ openAll: !this.state.openAll });
    alert(this.state.openAll);
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, trainingSet } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleClickAll}>
            <ListItemText primary="All" />
          </ListItem>
          <Divider />
          {trainingSet &&
            trainingSet.map(set => {
              return <ListItems key={set.id} set={set} />;
            })}
          <Divider />
          <ListItem button onClick={() => console.log("saved!")}>
            <Save />
            <ListItemText primary="Save it!" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
