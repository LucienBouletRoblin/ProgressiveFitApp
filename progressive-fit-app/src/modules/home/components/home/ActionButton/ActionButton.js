import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Add from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { Form, Field } from "react-final-form";
import TextField from "modules/common/components/formComponents/TextInput";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: "0 30px 30px 0"
  }
});

const validate = values => {
  if (!values.name) return { name: "Required !" };
};

class ActionButton extends React.Component {
  handleClickOpenActionButton = () => {
    this.props.openActionButton();
  };

  handleCloseActionButton = () => {
    this.props.closeActionButton();
  };

  onSubmit = async values => {
    console.log(JSON.stringify(values));
    this.props.closeActionButton();
  };

  render() {
    const { classes, clickActionButton, fullScreen } = this.props;
    return (
      <React.Fragment>
        <Button
          variant="fab"
          color="secondary"
          aria-label="add"
          className={classes.fab}
          onClick={this.handleClickOpenActionButton}
        >
          <Add style={{ fontSize: 36 }} />
        </Button>
        <Form
          onSubmit={this.onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Dialog
                fullScreen={fullScreen}
                open={clickActionButton}
                onClose={this.handleCloseActionButton}
              >
                <DialogTitle>{"Add an exercise?"}</DialogTitle>
                <DialogContent>
                  <Field
                    name="name"
                    component={TextField}
                    type="text"
                    label="Exercise name"
                    required
                  />
                  <Field
                    name="exercise"
                    component={TextField}
                    type="text"
                    label="Number of rep"
                    required
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={this.handleCloseActionButton}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting || invalid}
                    color="primary"
                    autoFocus
                    onClick={handleSubmit}
                  >
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </form>
          )}
        />
      </React.Fragment>
    );
  }
}

export default withMobileDialog()(withStyles(styles)(ActionButton));
