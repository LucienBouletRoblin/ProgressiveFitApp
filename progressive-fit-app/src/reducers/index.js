import { combineReducers } from "redux";
import TrainingSet from "modules/home/ducks/trainingSet";
import Exercise from "modules/home/ducks/exercise";
import Ui from "modules/common/ducks/ui";

export default combineReducers({
  Ui,
  TrainingSet,
  Exercise
});
