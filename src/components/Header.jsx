import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../actions/current.weather";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const weatherData = useSelector(
    (state) => state.currentWeather.currentWeather
  );

  useEffect(async () => {
    await dispatch(getCurrent("Lviv"));
  }, []);

  return (
    <div
      className="container-sm border-bottom border-2"
      style={{ width: "100%" }}
    >
      {JSON.stringify(weatherData)}
    </div>
  );
}

export default Header;
