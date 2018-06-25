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
import ReactSelect from "modules/common/components/formComponents/ReactSelect";
import { UID } from "modules/common/createId";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: "0 30px 30px 0"
  }
});

const selectData = [
  {
    value: 1,
    label: "1"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 3,
    label: "3"
  },
  {
    value: 4,
    label: "4"
  },
  {
    value: 5,
    label: "5"
  }
];

const validate = values => {
  if (!values.name) return { name: "Required !" };
  if (!values.trainingSetId) return { trainingSetId: "Required !" };
};

class ActionButton extends React.Component {
  handleClickOpenActionButton = () => {
    this.props.openActionButton();
  };

  handleCloseActionButton = () => {
    this.props.closeActionButton();
  };

  onSubmit = async values => {
    values.uid = UID();
    values.created_date = new Date();
    this.props.addExercise(values);
    this.props.closeActionButton();
  };

  render() {
    const {
      classes,
      clickActionButton,
      fullScreen,
      selectedTrainingSet,
      trainingSet
    } = this.props;

    const trainingSetForSelect = trainingSet.map(set => ({
      value: set.id,
      label: set.name
    }));

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
          initialValues={{
            trainingSetId: selectedTrainingSet && selectedTrainingSet.id
          }}
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
                    name="trainingSetId"
                    label="Training Set"
                    component={ReactSelect}
                    options={trainingSetForSelect}
                  />
                  <Field
                    name="name"
                    component={TextField}
                    type="text"
                    label="Exercise name"
                    required
                  />
                  <Field
                    name="set"
                    label="Number of set"
                    component={ReactSelect}
                    options={selectData}
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
