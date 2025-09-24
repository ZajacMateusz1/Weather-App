import styles from "./DayCard.module.scss";
interface DayCardProps {
  maxTempetature: number;
  maxTempetatureUnit: string;
  minTempetature: number;
  minTempetatureUnit: string;
  icon: string;
  date: string;
  sunrise: string;
}
export default function DayCard({
  maxTempetature,
  maxTempetatureUnit,
  minTempetature,
  minTempetatureUnit,
  icon,
  date,
  sunrise,
}: DayCardProps) {
  return (
    <tr className={styles.tr}>
      <td className="date">{date}</td>
      <td className="sunrise">{sunrise.slice(11)}</td>
      <td className="temperature">
        {maxTempetature}
        {maxTempetatureUnit} / {minTempetature}
        {minTempetatureUnit}
      </td>
      <td className="icon">{icon}</td>
    </tr>
  );
}
