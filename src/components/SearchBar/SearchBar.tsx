import { useState, type ChangeEvent, useCallback } from "react";
import useFetch from "../../hooks/useFetch.ts";
import useDebounce from "../../hooks/useDebounce.ts";
import { fetchCities } from "../../http.ts";
import type { City } from "../../types.ts";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const [userInput, setUserInput] = useState<string>("");
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }
  const debouncedValue = useDebounce(userInput, 300);
  const fetchCitiesFn = useCallback(
    () => fetchCities(debouncedValue),
    [debouncedValue]
  );
  const { data: cities, error, isLoading } = useFetch<City>(fetchCitiesFn);
  return (
    <div className={styles.searchBar}>
      <div className="inputDiv">
        <label htmlFor="locationInput" className={styles.glassSymbol}>
          🔍
        </label>
        <input
          type="text"
          className={styles.input}
          id="locationInput"
          value={userInput}
          onChange={(e) => handleInputChange(e)}
        />
        <button className={styles.locationButton}>⊕</button>
      </div>
      {!isLoading && userInput.length > 2 && cities.length > 0 ? (
        <ul className={`${styles.resultList} ${styles.resultPosition}`}>
          {cities.map((city) => {
            return (
              <li key={city.id} className={styles.listElement}>
                <span className={styles.cityName}>{city.name}</span>,{" "}
                {city.admin1}, {city.country}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
