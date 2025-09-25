import { createContext } from "react";
import type { City, WeatherResponse } from "../types.ts";
export interface WeatherContextTypes {
  city: City;
  lastCity: City | null;
  handleSetNewCity: (city: City) => void;
  weather: WeatherResponse | null;
  weatherError: string | null;
  weatherIsLoading: boolean;
  findUserLocation: () => void;
}
const WeatherContext = createContext<WeatherContextTypes>({
  city: {} as City,
  lastCity: null,
  handleSetNewCity: () => {},
  weather: null,
  weatherError: "",
  weatherIsLoading: false,
  findUserLocation: () => {},
});
export default WeatherContext;
