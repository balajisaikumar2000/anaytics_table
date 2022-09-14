import DataReducer from "./data";
import AppDataReducer from "./appData";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  data: DataReducer,
  appData: AppDataReducer,
});
export default allReducer;
