import SearchBar from "../SearchBar/SearchBar.tsx";
import styles from "./Header.module.scss";
import appLogo from "../../assets/logo.png";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoAndName}>
        <h1 className={styles.h1}>Weather App</h1>
        <div className={styles.imgContainer}>
          <img src={appLogo} alt="Application logo" className={styles.img} />
        </div>
      </div>
      <SearchBar />
    </header>
  );
}
