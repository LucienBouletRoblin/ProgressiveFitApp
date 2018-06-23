import Dexie from "dexie";

const db = new Dexie("ProgressiveFitApp");
db.version(1).stores({ trainingSet: "++id, uid, name" });

export default db;
