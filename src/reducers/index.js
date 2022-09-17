import DataReducer from "./data";
import AppDataReducer from "./appData";
import DateReducer from "./date";
import AppReducer from "./appname";
import ResponseReducer from "./response";
import RequestReducer from "./requests";
import CTRReducer from "./CTR";
import FillRateReducer from "./fillrate";
import ClicksReducer from "./clicks";
import RevenueReducer from "./revenue";
import ImpressionsReducer from "./impressions";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  data: DataReducer,
  appData: AppDataReducer,
  date: DateReducer,
  appname: AppReducer,
  response: ResponseReducer,
  requests: RequestReducer,
  impressions: ImpressionsReducer,
  clicks: ClicksReducer,
  revenue: RevenueReducer,
  fillrate: FillRateReducer,
  ctr: CTRReducer,
});
export default allReducer;
