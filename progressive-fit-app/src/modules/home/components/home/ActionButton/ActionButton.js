import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Add from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: "0 30px 30px 0"
  }
});

class ActionButton extends React.Component {
  handleClickOpenActionButton = () => {
    this.props.openActionButton();
  };

  handleCloseActionButton = () => {
    this.props.closeActionButton();
  };

  render() {
    const { classes } = this.props;
    return (
      <Button
        variant="fab"
        color="secondary"
        aria-label="add"
        className={classes.fab}
        onClick={this.handleClickOpenActionButton}
      >
        <Add style={{ fontSize: 36 }} />
      </Button>
    );
  }
}

export default withStyles(styles)(ActionButton);
