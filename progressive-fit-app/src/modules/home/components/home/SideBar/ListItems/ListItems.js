import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

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

class ListItems extends React.Component {
  state = { openAll: true, open: false };

  handleClickAll = () => {
    this.setState({ openAll: !this.state.openAll });
    alert(this.state.openAll);
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, set } = this.props;
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={set.name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {set.exercises &&
              set.exercises.map(exercise => (
                <ListItem key={exercise.id} button className={classes.nested}>
                  <ListItemText inset primary={exercise.name} />
                </ListItem>
              ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ListItems);
