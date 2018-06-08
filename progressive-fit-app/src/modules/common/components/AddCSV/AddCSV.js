import React from "react";
import NoteAdd from "@material-ui/icons/NoteAdd";
import IconButton from "@material-ui/core/IconButton";

class AddCSV extends React.Component {
  // TODO add modal to load csv file
  render() {
    return (
      <IconButton onClick={this.handleAddCSV}>
        <NoteAdd />
      </IconButton>
    );
  }
}

export default AddCSV;
