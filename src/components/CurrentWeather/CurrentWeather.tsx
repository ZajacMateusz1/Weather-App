import { useContext } from "react";
import WeatherContext from "../../store/weather-context.tsx";
import WeatherInfoCard from "../WeatherInfoCard/WeatherInfoCard.tsx";
import Error from "../Error/Error.tsx";
import Loading from "../Loading/Loading.tsx";
import styles from "./CurrentWeather.module.scss";
export default function CurrentWeather() {
  const { weather, weatherError, weatherIsLoading, city } =
    useContext(WeatherContext);
  if (weatherError) return <Error>{weatherError}</Error>;
  if (weatherIsLoading || !weather) {
    return <Loading />;
  }
  const values = weather.hourly;
  const units = weather.hourly_units;
  return (
    <main className={styles.main}>
      <h2>Current weather in {city.name}</h2>
      <div className={styles.weatherInfo}>
        <WeatherInfoCard
          value={values.temperature_2m[0]}
          unit={units.temperature_2m}
          icon="🌡️"
        >
          Temperature
        </WeatherInfoCard>
        <WeatherInfoCard
          value={values.wind_speed_10m[0]}
          unit={units.wind_speed_10m}
          icon="🍃"
        >
          Wind
        </WeatherInfoCard>
        <WeatherInfoCard
          value={values.pressure_msl[0]}
          unit={units.pressure_msl}
          icon="🧭"
        >
          Pressure
        </WeatherInfoCard>
        <WeatherInfoCard
          value={values.precipitation_probability[0]}
          unit={units.precipitation_probability}
          icon="🌧️"
        >
          Precipitation
        </WeatherInfoCard>
      </div>
    </main>
  );
}
