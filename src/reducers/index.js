import { combineReducers } from "redux";
import currentWeather from "./current.weather";
import dailyWeather from "./daily.weather";

export default combineReducers({
  currentWeather,
  dailyWeather,
});
