import { SET_CITY } from "../actions/types";

export const setCity = (cityName) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CITY,
      payload: cityName,
    });
  } catch (err) {
    console.log(err);
  }
};
