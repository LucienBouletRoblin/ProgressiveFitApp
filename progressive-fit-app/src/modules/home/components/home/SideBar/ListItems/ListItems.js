import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import { Divider } from "@material-ui/core";

class ListItems extends React.Component {
  handleClick = () => {
    this.props.selectTrainingSet(this.props.set);
  };

  render() {
    const { set } = this.props;
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick}>
          <FitnessCenter />
          <ListItemText primary={set.name} />
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }
}

export default ListItems;
