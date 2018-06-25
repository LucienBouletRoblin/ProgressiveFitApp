import Dexie from "dexie";

const db = new Dexie("ProgressiveFitApp");
db.version(1).stores({
  trainingSet: "++id, uid, name",
  exercise: "++id, uid, name, trainingSetId",
  set: "++id, uid, exerciseId, start_time,end_time,reps, mass"
});

export default db;
