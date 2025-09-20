import styles from "./DayCard.module.scss";
interface DayCardProps {
  children: string;
  icon: string;
}
export default function DayCard({ children, icon }: DayCardProps) {
  return (
    <li className={styles.li}>
      {children} <span className="icon">{icon}</span>
    </li>
  );
}
