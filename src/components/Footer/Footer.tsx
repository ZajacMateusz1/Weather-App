import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Links</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a
            className={styles.link}
            href="https://open-meteo.com/"
            target="_blank"
          >
            Weather data by Open-Meteo.com
          </a>
        </li>
        <li className={styles.li}>
          <a
            className={styles.link}
            href="https://github.com/ZajacMateusz1/Weather-App"
            target="_blank"
          >
            GithHub repo
          </a>
        </li>
      </ul>
    </footer>
  );
}
