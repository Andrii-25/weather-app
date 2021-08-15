import { GET_DAILY_WEATHER } from "../actions/types";

const initialState = {}

function dailyWeatherReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DAILY_WEATHER:
      return payload;

    default:
      return state;
  }
}

export default dailyWeatherReducer;
