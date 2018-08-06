import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Save from "@material-ui/icons/Save";
import db from "modules/common/db";
import IDBExportImport from "indexeddb-export-import";
import moment from "moment";

const downloadObjectAsJson = (exportObj, exportName) => {
  let dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  let downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

class SaveData extends React.Component {
  handleSaveData = () => {
    db.open()
      .then(function() {
        let idb_db = db.backendDB();
        IDBExportImport.exportToJsonString(idb_db, function(err, jsonString) {
          if (err) console.error(err);
          else {
            downloadObjectAsJson(
              jsonString,
              "ProgressiveFitApp_data_save_" + moment().format("DD-MM-YYYY")
            );
          }
        });
      })
      .catch(function(e) {
        console.error("Could not connect. " + e);
      });
  };

  render() {
    return (
      <ListItem button onClick={this.handleSaveData}>
        <Save />
        <ListItemText primary="Save" />
      </ListItem>
    );
  }
}

export default SaveData;
