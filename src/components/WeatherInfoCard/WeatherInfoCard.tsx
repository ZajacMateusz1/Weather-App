import styles from "./WeatherInfoCard.module.scss";
interface WeatherInfoCardProps {
  children: string;
  value: string | number;
  unit: string;
  icon: string;
}
export default function WeatherInfoCard({
  children,
  value,
  unit,
  icon,
}: WeatherInfoCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.h3}>
        {children} <span className={styles.icon}>{icon}</span>
      </h3>
      <p className={styles.info}>
        {value} {unit}
      </p>
    </div>
  );
}
