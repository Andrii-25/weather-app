import { combineReducers } from "redux";
import currentWeather from "./current.weather";
import dailyWeather from "./daily.weather";
import city from "./city";

export default combineReducers({
  currentWeather,
  dailyWeather,
  city,
});
