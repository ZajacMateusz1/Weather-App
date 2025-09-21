import { useContext } from "react";
import type { ReactNode } from "react";
import WeatherContext from "../../store/weather-context.tsx";
import Error from "../Error/Error.tsx";
import type { City } from "../../types.ts";
import styles from "./SearchResult.module.scss";
interface SearchResultProps {
  cities: City[];
  error: string | null;
  isLoading: boolean;
  clearInput: () => void;
}
export default function SearchResult({
  cities,
  error,
  isLoading,
  clearInput,
}: SearchResultProps) {
  const { handleSetNewCity } = useContext(WeatherContext);
  let result: ReactNode = null;
  if (!isLoading && cities.length > 0) {
    result = (
      <ul className={styles.resultList}>
        {cities.map((city) => {
          return (
            <button
              key={city.id}
              className={styles.listButton}
              onClick={() => {
                clearInput();
                handleSetNewCity(city);
              }}
            >
              <li>
                <span className={styles.cityName}>{city.name}</span>,{" "}
                {city.admin1}
                {city.admin2 ? `, ${city.admin2}` : ""}, {city.country}
              </li>
            </button>
          );
        })}
      </ul>
    );
  } else if (error) result = <Error>{error}</Error>;
  else if (!isLoading && cities.length === 0)
    result = <p className={styles.p}>No results found</p>;
  else if (isLoading) result = <p className={styles.p}>Loading data...</p>;
  return <div className={styles.resultPosition}>{result}</div>;
}
