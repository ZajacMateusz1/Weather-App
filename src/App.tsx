import WeatherContextProvider from "./store/WeatherContextProvider.tsx";
import Header from "./components/Header/Header.tsx";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.tsx";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.tsx";
function App() {
  return (
    <WeatherContextProvider>
      <Header />
      <CurrentWeather />
      <WeatherForecast />
    </WeatherContextProvider>
  );
}

export default App;
