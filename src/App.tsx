import WeatherContextProvider from "./store/WeatherContextProvider.tsx";
import Header from "./components/Header/Header.tsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.tsx";
import HourlyTemperatureChart from "./components/HourlyTemperatureChart/HourlyTemperatureChart.tsx";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.tsx";
function App() {
  return (
    <WeatherContextProvider>
      <Header />
      <CurrentWeather />
      <HourlyTemperatureChart />
      <WeatherForecast />
    </WeatherContextProvider>
  );
}

export default App;
