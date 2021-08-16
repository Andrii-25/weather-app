import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDaily } from "../actions/daily.weather";

function DailyWeatherCard() {
  const [isLoaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const dailyWeather = useSelector((state) => state.dailyWeather);
  const cityName = useSelector((state) => state.city);

  const dateBuilder = (d) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(d * 1000);
    return days[date.getDay()];
  };

  useEffect(async () => {
    try {
      await dispatch(getDaily(cityName));
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }, [cityName]);

  if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-dark"
          style={{ marginTop: "300px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const cardList = dailyWeather.slice(0, 5).map((card) => {
    const iconCode = card.weather.icon;
    const iconURL = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
    return (
      <div
        className="card float-start shadow"
        style={{ height: "320px", width: "200px", margin: "15px" }}
        key={card.ts}
      >
        <h5 className="card-title text-center mt-2">{dateBuilder(card.ts)}</h5>
        <div className="d-flex justify-content-center">
          <img
            src={iconURL}
            style={{ width: "130px" }}
            alt="weather-daily-card"
          ></img>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{card.weather.description}</h5>
          <div className="row text-center mt-3">
            <div className="col">
              <h5>
                <i className="bi bi-thermometer-low"></i>Min
              </h5>
            </div>
            <div className="col">
              <h5>
                <i className="bi bi-thermometer-high"></i>Max
              </h5>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <h5>{Math.round(card.min_temp)} °C</h5>
            </div>
            <div className="col">
              <h5>{Math.round(card.max_temp)} °C</h5>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-2 d-flex justify-content-center">
      {cardList}
    </div>
  );
}

export default DailyWeatherCard;
