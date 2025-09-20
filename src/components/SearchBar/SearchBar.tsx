import { useState, type ChangeEvent, useCallback } from "react";
import useFetch from "../../hooks/useFetch.ts";
import { fetchCities } from "../../http.ts";
import type { City } from "../../types.ts";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const [userInput, setUserInput] = useState<string>("");
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }
  const fetchCitiesFn = useCallback(() => fetchCities(userInput), [userInput]);
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
      {
        <ul>
          {cities?.map((city) => {
            return <li key={city.id}>{city.name}</li>;
          })}
        </ul>
      }
    </div>
  );
}
