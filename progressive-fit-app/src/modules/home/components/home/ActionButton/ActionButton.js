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
    this.props.addExercise(values, this.props.selectedTrainingSet.id);
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
                    <Grid item xs={12}>
                      <Field
                        name="reps"
                        label="Select a number of reps"
                        component={Select}
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="7">7</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="9">9</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                      </Field>
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

export default withMobileDialog()(withStyles(styles)(ActionButton));
