import Header from "./components/Header/Header.tsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.tsx";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.tsx";
function App() {
  return (
    <>
      <Header />
      <CurrentWeather />
      <WeatherForecast />
    </>
  );
}

export default App;
