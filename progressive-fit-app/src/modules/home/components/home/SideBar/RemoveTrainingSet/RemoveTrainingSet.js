import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { Form, Field } from "react-final-form";
import SelectInput from "modules/common/components/formComponents/SelectInput";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Remove from "@material-ui/icons/Remove";
import db from "modules/common/db";
import MenuItem from "@material-ui/core/MenuItem";

class RemoveTrainingSet extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = async values => {
    this.props.removeTrainingSet(values);
    this.handleClose();
  };

  componentDidMount() {
    db.table("trainingSet")
      .toArray()
      .then(trainingSet => {
        this.props.getFromDbTrainingSet(trainingSet);
      });
  }

  render() {
    const { fullScreen, trainingSet } = this.props;
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClickOpen}>
          <Remove />
          <ListItemText primary="Remove a training set" />
        </ListItem>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, submitting, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Dialog
                fullScreen={fullScreen}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <DialogTitle>{"Remove a training set?"}</DialogTitle>
                <DialogContent>
                  <Field
                    name="trainingSet_id"
                    component={SelectInput}
                    label="Name"
                    required
                    multiple
                  >
                    <MenuItem value="">
                      <em>No training set</em>
                    </MenuItem>
                    {trainingSet.map(set => {
                      return (
                        <MenuItem key={set.id} value={set.id}>
                          {set.name}
                        </MenuItem>
                      );
                    })}
                  </Field>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submitting || invalid}
                    color="primary"
                    autoFocus
                    onClick={handleSubmit}
                  >
                    Remove
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

export default withMobileDialog()(RemoveTrainingSet);
