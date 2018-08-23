import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Save from "@material-ui/icons/Save";
import db from "modules/common/db";
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

const exportToJsonString = (idb_db, cb) => {
  let exportObject = {};
  if (idb_db.objectStoreNames.length === 0)
    cb(null, JSON.stringify(exportObject));
  else {
    let transaction = idb_db.transaction(idb_db.objectStoreNames, "readonly");
    transaction.onerror = event => {
      cb(event);
    };
    [...idb_db.objectStoreNames].map(storeName => {
      let allObjects = [];
      transaction.objectStore(storeName).openCursor().onsuccess = event => {
        let cursor = event.target.result;
        if (cursor) {
          allObjects.push(cursor.value);
          cursor.continue();
        } else {
          exportObject[storeName] = allObjects;
          if (
            idb_db.objectStoreNames.length === Object.keys(exportObject).length
          ) {
            cb(null, JSON.stringify(exportObject));
          }
        }
      };
      return null;
    });
  }
};

class SaveData extends React.Component {
  handleSaveData = () => {
    db.open()
      .then(function() {
        let idb_db = db.backendDB();
        exportToJsonString(idb_db, function(err, jsonString) {
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
