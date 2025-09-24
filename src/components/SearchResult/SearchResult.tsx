import { useContext } from "react";
import type { ReactNode } from "react";
import WeatherContext from "../../store/weather-context.tsx";
import Error from "../Error/Error.tsx";
import Loading from "../Loading/Loading.tsx";
import type { City } from "../../types.ts";
import styles from "./SearchResult.module.scss";
interface SearchResultProps {
  cities: City[] | null;
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
  if (error) return <Error>{error}</Error>;
  if (isLoading || cities === null) return <Loading />;
  if (!isLoading && cities.length > 0) {
    return (
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
  }
  if (!isLoading && cities.length === 0)
    result = <p className={styles.p}>No results found</p>;
  return <div className={styles.resultPosition}>{result}</div>;
}
