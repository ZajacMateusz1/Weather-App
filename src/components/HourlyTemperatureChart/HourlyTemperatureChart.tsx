import { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import Error from "../Error/Error.tsx";
import Loading from "../Loading/Loading.tsx";
import { LineChart, Line, YAxis, XAxis } from "recharts";
import styles from "./HourlyTemperatureChart.module.scss";
export default function HourlyTemperatureChart() {
  const { weather, weatherError, weatherIsLoading } =
    useContext(WeatherContext);
  if (weatherError) return <Error>{weatherError}</Error>;
  if (weatherIsLoading || !weather) return <Loading />;
  const chartValuesObj = weather.hourly.temperature_2m.map((temperature, i) => {
    return {
      temperature,
      date: weather.hourly.time[i].slice(-5),
    };
  });
  return (
    <section id="chart" className={styles.chartSection}>
      <h2 className={styles.h2}>24-hour weather forecast</h2>
      <LineChart
        height={200}
        width={1000}
        data={chartValuesObj}
        margin={{ top: 20, left: 20, bottom: 20, right: 20 }}
      >
        <YAxis unit={weather.hourly_units.temperature_2m} />
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
