import { GET_DAILY_WEATHER } from "../actions/types";
import WeatherService from "../services/weather.service";

export const getDaily = (city) => async (dispatch) => {
  try {
    const res = await WeatherService.getDailyWeather(city);

    dispatch({
      type: GET_DAILY_WEATHER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
