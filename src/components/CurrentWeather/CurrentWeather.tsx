import WeatherInfoCard from "../WeatherInfoCard/WeatherInfoCard.tsx";
import styles from "./CurrentWeather.module.scss";
export default function CurrentWeather() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>Current weather in Warsaw</h2>
      <div className={styles.weatherInfo}>
        <WeatherInfoCard value={22} unit="&deg;C" icon="🌡️">
          Temperature
        </WeatherInfoCard>
        <WeatherInfoCard value={12} unit="km/h" icon="🍃">
          Wind
        </WeatherInfoCard>
        <WeatherInfoCard value="Good" unit="" icon="🌍">
          Air Quality
        </WeatherInfoCard>
        <WeatherInfoCard value={30} unit="%" icon="🌧️">
          Precipitation
        </WeatherInfoCard>
      </div>
    </main>
  );
}
