import "./App.css";
import Header from "./components/Header";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import DailyWeatherCard from "./components/DailyWeatherCard";

function App() {
  return (
    <div>
      <Header></Header>
      <CurrentWeatherCard></CurrentWeatherCard>
      <DailyWeatherCard></DailyWeatherCard>
    </div>
  );
}

export default App;
