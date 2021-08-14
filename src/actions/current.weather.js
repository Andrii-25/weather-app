import { GET_CURRENT_WEATHER } from "../actions/types";
import WeatherService from "../services/weather.service";

export const getCurrent = (city) => async (dispatch) => {
  try {
    const res = await WeatherService.getCurrentWeather(city);

    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
