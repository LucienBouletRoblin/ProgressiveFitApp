import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { Form, Field } from "react-final-form";
import TextField from "modules/common/components/formComponents/TextInput";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Add from "@material-ui/icons/Add";
import { UID } from "modules/common/createId";

const validate = values => {
  if (!values.name) return { name: "Required !" };
};

class AddTrainingSet extends React.Component {
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
    values.created_date = new Date();
    values.uid = UID();
    this.props.addTrainingSet(values);
    this.props.getFromDbTrainingSet(true);
    this.handleClose();
  };

  render() {
    const { fullScreen } = this.props;
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClickOpen}>
          <Add />
          <ListItemText primary="Add a training set" />
        </ListItem>
        <Form
          onSubmit={this.onSubmit}
          validate={validate}
          initialValues={{ name: "Pect/Back" }}
          render={({ handleSubmit, submitting, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Dialog
                fullScreen={fullScreen}
                open={this.state.open}
                onClose={this.handleClose}
              >
                <DialogTitle>{"Add a training set?"}</DialogTitle>
                <DialogContent>
                  <Field
                    name="name"
                    component={TextField}
                    type="text"
                    label="Name"
                    required
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

export default withMobileDialog()(AddTrainingSet);
