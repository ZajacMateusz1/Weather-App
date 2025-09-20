import DayCard from "../DayCard/DayCard.tsx";
import styles from "./WeatherForecast.module.scss";
export default function WeatherForecast() {
  return (
    <section id="weatherForecast" className={styles.section}>
      <h2>7-days weather forecast</h2>
      <ol className={styles.ol}>
        <DayCard icon="☀️">Mon 23°/15°</DayCard>
        <DayCard icon="☀️">Mon 23°/15°</DayCard>
        <DayCard icon="☀️">Mon 23°/15°</DayCard>
        <DayCard icon="☀️">Mon 23°/15°</DayCard>
        <DayCard icon="☀️">Mon 23°/15°</DayCard>
        <DayCard icon="☀️">Mon 23°/15°</DayCard>
        <DayCard icon="☀️">Mon 23°/15°</DayCard>
      </ol>
    </section>
  );
}
