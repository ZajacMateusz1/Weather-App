import styles from "./Error.module.scss";
interface ErrorProps {
  children: string;
}
export default function Error({ children }: ErrorProps) {
  return (
    <div className={styles.errorDiv}>
      <p className={styles.message}>{children}</p>
    </div>
  );
}
