import axios from "axios";

const API_URL_DAILY = "https://api.weatherbit.io/v2.0/forecast/daily";
const API_URL_CURRENT = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY_DAILY = "c17139505b494caeaecfb8dbdcdd4f09";
const API_KEY_CURRENT = "d59f4924123076df608199b4d5280705";

class WeatherService {
  getCurrentWeather(city) {
    return axios.get(
      `${API_URL_CURRENT}?q=${city}&units=metric&appid=${API_KEY_CURRENT}`
    );
  }

  getDailyWeather(city) {
    return axios.get(`${API_URL_DAILY}?city=${city}&key=${API_KEY_DAILY}`);
  }
}

export default new WeatherService();
