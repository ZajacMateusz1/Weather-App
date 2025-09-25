import { useContext } from "react";
import WeatherContext from "../../store/weather-context.tsx";
import DayCard from "../DayCard/DayCard.tsx";
import Error from "../Error/Error.tsx";
import Loading from "../Loading/Loading.tsx";
import weatherIcons from "../../assets/weatherIcons.ts";
import styles from "./WeatherForecast.module.scss";
export default function WeatherForecast() {
  const { weather, weatherError, weatherIsLoading } =
    useContext(WeatherContext);
  if (weatherError) return <Error>{weatherError}</Error>;
  if (weatherIsLoading || !weather) {
    return <Loading />;
  }
  const values = weather.daily;
  const units = weather.daily_units;
  return (
    <section id="weatherForecast" className={styles.section}>
      <h2 className={styles.h2}>7-days weather forecast</h2>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Date</th>
            <th>Sunrise</th>
            <th>Temperature</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {values.temperature_2m_max.map((maxTemperature, i) => {
            return (
              <DayCard
                key={values.time[i]}
                maxTempetature={maxTemperature}
                maxTempetatureUnit={units.temperature_2m_max}
                minTempetature={values.temperature_2m_min[i]}
                minTempetatureUnit={units.temperature_2m_min}
                icon={weatherIcons[values.weather_code[i]]}
                date={values.time[i]}
                sunrise={values.sunrise[i]}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
