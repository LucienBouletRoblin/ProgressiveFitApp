import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { Form, Field } from "react-final-form";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ReactSelect from "modules/common/components/formComponents/ReactSelect";
import Remove from "@material-ui/icons/Remove";

class RemoveTrainingSet extends React.Component {
  state = {
    open: false,
    age: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = async values => {
    this.props.removeTrainingSet(
      values && values.trainingSetToRemove && values.trainingSetToRemove.value
    );
    this.handleClose();
  };

  handleChange = name => event => {
    this.setState({ [name]: Number(event.target.value) });
  };

  componentDidMount() {
    this.props.getFromDbTrainingSet();
  }

  render() {
    const { fullScreen, trainingSet } = this.props;

    let selectData = trainingSet.map(set => ({
      value: set.id,
      label: set.name
    }));

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
                    name="trainingSetToRemove"
                    component={ReactSelect}
                    options={selectData}
                  />
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
