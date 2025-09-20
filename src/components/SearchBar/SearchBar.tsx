import styles from "./SearchBar.module.scss";
export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <p className={styles.glassSymbol}>🔍</p>
      <input type="text" className={styles.input} />
      <button className={styles.locationButton}>⊕</button>
    </div>
  );
}
