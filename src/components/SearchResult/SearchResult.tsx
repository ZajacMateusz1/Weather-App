import type { ReactNode } from "react";
import Error from "../Error/Error.tsx";
import type { City } from "../../types.ts";
import styles from "./SearchResult.module.scss";
interface SearchResultProps {
  cities: City[];
  error: string | null;
  isLoading: boolean;
  debouncedValue: string;
}
export default function SearchResult({
  cities,
  error,
  isLoading,
  debouncedValue,
}: SearchResultProps) {
  let result: ReactNode = null;
  if (!isLoading && debouncedValue.length > 2 && cities.length > 0) {
    result = (
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
    );
  } else if (error) result = <Error>{error}</Error>;
  else if (!isLoading && debouncedValue.length > 0 && cities.length === 0)
    result = <p>No results found</p>;
  else if (isLoading) result = <p>Loading data...</p>;
  return <div className={styles.resultPosition}>{result}</div>;
}
