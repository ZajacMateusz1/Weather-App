import { useState, type ChangeEvent, useCallback, useContext } from "react";
import WeatherContext from "../../store/weather-context.tsx";
import SearchResult from "../SearchResult/SearchResult.tsx";
import useFetch from "../../hooks/useFetch.ts";
import useDebounce from "../../hooks/useDebounce.ts";
import { fetchCities } from "../../http.ts";
import type { City } from "../../types.ts";
import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  const [userInput, setUserInput] = useState<string>("");
  const { findUserLocation, lastCity, handleSetNewCity } =
    useContext(WeatherContext);
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
  const { data: cities, error, isLoading } = useFetch<City[]>(fetchCitiesFn);
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
        <button className={styles.locationButton} onClick={findUserLocation}>
          ⊕
        </button>
      </div>
      {userInput.length > 0 && userInput.length <= 2 && lastCity !== null && (
        <>
          <p className={styles.recentSearch}>Recent search</p>
          <button
            className={styles.lastCityButton}
            onClick={() => {
              handleSetNewCity(lastCity);
              clearInput();
            }}
          >
            <span className={styles.cityName}>{lastCity.name}</span>,{" "}
            {lastCity.admin1}
            {lastCity.admin2 ? `, ${lastCity.admin2}` : ""}, {lastCity.country}
          </button>
        </>
      )}
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
