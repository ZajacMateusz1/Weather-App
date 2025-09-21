import { useState, type ChangeEvent, useCallback } from "react";
import SearchResult from "../SearchResult/SearchResult.tsx";
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
  function clearInput() {
    setUserInput("");
  }
  const debouncedValue = useDebounce(userInput, 300);
  const fetchCitiesFn = useCallback(
    () => fetchCities(debouncedValue),
    [debouncedValue]
  );
  const {
    data: cities,
    error,
    isLoading,
  } = useFetch<City[]>(fetchCitiesFn, []);
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputDiv}>
        <label htmlFor="locationInput" className={styles.glassSymbol}>
          🔍
        </label>
        <input
          type="text"
          className={styles.input}
          id="locationInput"
          placeholder="Type first 3 letters"
          value={userInput}
          onChange={(e) => handleInputChange(e)}
        />
        <button className={styles.locationButton}>⊕</button>
      </div>
      {userInput.length > 2 && (
        <SearchResult
          cities={cities}
          error={error}
          isLoading={isLoading}
          clearInput={clearInput}
        />
      )}
    </div>
  );
}
