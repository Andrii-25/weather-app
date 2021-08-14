import axios from "axios";

const API_URL_DAILY = "https://api.weatherbit.io/v2.0/forecast/daily";
const API_URL_CURRENT = "https://api.weatherbit.io/v2.0/current";
const API_KEY = "c17139505b494caeaecfb8dbdcdd4f09";

class WeatherService {
  getCurrentWeather(city) {
    return axios.get(
      `${API_URL_CURRENT}?city=${city}&key=${API_KEY}`
    );
  }

  getDailyWeather(city) {
    return axios.get(
      `${API_URL_DAILY}?city=${city}&key=${API_KEY}`
    );
  }
}

export default new WeatherService();
