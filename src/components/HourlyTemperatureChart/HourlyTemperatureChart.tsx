import { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import Error from "../Error/Error.tsx";
import Loading from "../Loading/Loading.tsx";
import { LineChart, Line, YAxis, XAxis } from "recharts";
import styles from "./HourlyTemperatureChart.module.scss";
export default function HourlyTemperatureChart() {
  const { hourlyWeather, hourlyWeatherError, hourlyWeatherIsLoading } =
    useContext(WeatherContext);
  if (hourlyWeatherError) return <Error>{hourlyWeatherError}</Error>;
  if (hourlyWeatherIsLoading || !hourlyWeather) return <Loading />;
  const chartValuesObj = hourlyWeather.hourly.temperature_2m.map(
    (temperature, i) => {
      return {
        temperature,
        date: hourlyWeather.hourly.time[i].slice(-5),
      };
    }
  );
  return (
    <section id="chart" className={styles.chartSection}>
      <h2 className={styles.h2}>24-hour weather forecast</h2>
      <LineChart
        height={200}
        width={1000}
        data={chartValuesObj}
        margin={{ top: 20, left: 20, bottom: 20, right: 20 }}
      >
        <YAxis unit={hourlyWeather.hourly_units.temperature_2m} />
        <XAxis dataKey="date" padding={{ left: 15 }} />
        <Line
          dataKey="temperature"
          type="monotone"
          dot={false}
          label={{ position: "bottom" }}
        />
      </LineChart>
    </section>
  );
}
