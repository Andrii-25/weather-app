import { SET_CITY } from "../actions/types";

const initialState = "Lviv";

function cityReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CITY:
      return payload;

    default:
      return state;
  }
}

export default cityReducer;
