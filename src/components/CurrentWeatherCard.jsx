import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../actions/current.weather";

function CurrentWeatherCard() {
  const dispatch = useDispatch();

  const [isLoaded, setLoaded] = useState(false);
  const [iconCode, setIconCode] = useState("");

  const currentWeather = useSelector((state) => state.currentWeather);

  const getWeatherIcon = (city) => {
    axios
      .get(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=c17139505b494caeaecfb8dbdcdd4f09`
      )
      .then((res) => {
        setIconCode(res.data.data[0].weather.icon);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(async () => {
    try {
      await dispatch(getCurrent("Lviv"));
      await getWeatherIcon("Lviv");
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const dateBuilder = (d) => {
    let date = new Date(d * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  };

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

  const iconURL = `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;

  return (
    <div
      className="container mt-5 border border-2 rounded shadow"
      style={{ minHeight: "170px" }}
    >
      <div className="row mt-3">
        <div
          className="col d-flex justify-content-center"
          style={{ maxWidth: "150px" }}
        >
          <img src={iconURL}></img>
        </div>

        <div className="col" style={{ maxWidth: "150px" }}>
          <h3>{`${Math.round(currentWeather.main.temp)} °C`}</h3>
          <h3>{`${currentWeather.name}, ${currentWeather.sys.country}`}</h3>
          <h4>{dateBuilder(currentWeather.dt)}</h4>
        </div>

        <div className="col text-center" style={{ maxWidth: "200px" }}>
          <h5>Humidity</h5>
          <h2 className="mt-4">
            <i class="bi bi-droplet"></i>
            {` ${currentWeather.main.humidity} %`}
          </h2>
        </div>

        <div className="col text-center" style={{ maxWidth: "240px" }}>
          <h5>Wind status</h5>
          <h2 className="mt-4">
            <i class="bi bi-wind"></i>
            {` ${currentWeather.wind.speed} km/h`}
          </h2>
        </div>

        <div className="col text-center" style={{ maxWidth: "380px" }}>
          <h5>Sunrise & Sunset</h5>
          <div className="row mt-4">
            <div className="col">
              <h2>
                <i class="bi bi-sunrise"></i>
                {` ${dateBuilder(currentWeather.sys.sunrise)}`}
              </h2>
            </div>
            <div className="col">
              <h2>
                <i class="bi bi-sunset"></i>
                {` ${dateBuilder(currentWeather.sys.sunset)}`}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
