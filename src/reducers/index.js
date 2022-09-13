import DataReducer from "./data";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  data: DataReducer,
});
export default allReducer;
