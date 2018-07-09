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
import { UID } from "modules/common/createId";
import Select from "modules/common/components/formComponents/SelectInput";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from "@material-ui/core";

const validate = values => {
  if (!values.name) return { name: "Required !" };
  if (!values.trainingSetId) return { trainingSetId: "Required !" };
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2
  }
});

class AddExercise extends React.Component {
  handleClickOpenActionButton = () => {
    this.props.openActionButton();
  };

  handleCloseActionButton = () => {
    this.props.closeActionButton();
  };

  onSubmit = async values => {
    values.uid = UID();
    values.created_date = new Date();
    this.props.addExercise(values, this.props.selectedTrainingSet.id);
    this.props.closeActionButton();
  };

  render() {
    const {
      clickActionButton,
      fullScreen,
      selectedTrainingSet,
      trainingSet,
      classes
    } = this.props;

    return (
      <React.Fragment>
        <Button
          variant="contained"
          color="primary"
          aria-label="add"
          className={classes.button}
          onClick={this.handleClickOpenActionButton}
        >
          <Add /> Add an exercise
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
                  <Grid container>
                    <Grid item xs={12}>
                      <Field
                        name="trainingSetId"
                        label="Training Set"
                        component={Select}
                      >
                        {trainingSet.map(set => (
                          <MenuItem value={set.id} key={set.id}>
                            {set.name}
                          </MenuItem>
                        ))}
                      </Field>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="name"
                        component={TextField}
                        type="text"
                        label="Exercise name"
                        required
                      />
                    </Grid>
                  </Grid>
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

export default withMobileDialog()(withStyles(styles)(AddExercise));
