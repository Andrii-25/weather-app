import { GET_CURRENT_WEATHER } from "../actions/types";

const initialState = {};

function currentWeatherReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_WEATHER:
      return payload;

    default:
      return state;
  }
}

export default currentWeatherReducer;
