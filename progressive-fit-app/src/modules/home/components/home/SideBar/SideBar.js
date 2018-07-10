import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItems from "./ListItems";
import Save from "@material-ui/icons/Save";
import AddTrainingSet from "./AddTrainingSet";
import RemoveTrainingSet from "./RemoveTrainingSet";
import ImportData from "./ImportData";
import db from "modules/common/db";
import IDBExportImport from "indexeddb-export-import";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function downloadObjectAsJson(exportObj, exportName) {
  let dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  let downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

class SideBar extends React.Component {
  handleSaveData = () => {
    db.open()
      .then(function() {
        let idb_db = db.backendDB();

        IDBExportImport.exportToJsonString(idb_db, function(err, jsonString) {
          if (err) console.error(err);
          else {
            console.log("Exported as JSON: " + jsonString);
            downloadObjectAsJson(jsonString, "ProgressiveFitApp_data_save");
          }
        });
      })
      .catch(function(e) {
        console.error("Could not connect. " + e);
      });
  };

  render() {
    const { classes, trainingSet } = this.props;
    return (
      <div className={classes.root}>
        <List component="nav">
          <Divider />
          {trainingSet &&
            trainingSet.map(set => {
              return <ListItems key={set.id} set={set} />;
            })}
          <Divider />
          <AddTrainingSet />
          <Divider />
          <RemoveTrainingSet />
          <Divider />
          <ListItem button onClick={this.handleSaveData}>
            <Save />
            <ListItemText primary="Save" />
          </ListItem>
          <ImportData />
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(SideBar);
