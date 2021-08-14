import { GET_DAILY_WEATHER } from "../actions/types";

const initialState = {
  dailyWeather: {},
};

function dailyWeatherReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DAILY_WEATHER:
      return { ...state, dailyWeather: payload };

    default:
      return state;
  }
}

export default dailyWeatherReducer;
