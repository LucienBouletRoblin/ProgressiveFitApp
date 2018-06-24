import Dexie from "dexie";

const db = new Dexie("ProgressiveFitApp");
db.version(1).stores({
  trainingSet: "++id, uid, name",
  exercise: "++id, uid, name, trainingSetId",
  reps: "++id, uid, exerciseId"
});

export default db;
