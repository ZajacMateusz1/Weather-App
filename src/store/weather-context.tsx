import { createContext } from "react";
import type { City, HourlyWeatherResponse } from "../types.ts";
export interface WeatherContextTypes {
  city: City;
  handleSetNewCity: (city: City) => void;
  hourlyWeather: HourlyWeatherResponse;
  hourlyWeatherError: string | null;
  hourlyWeatherIsLoading: boolean;
}
const WeatherContext = createContext<WeatherContextTypes>({
  city: {} as City,
  handleSetNewCity: () => {},
  hourlyWeather: {} as HourlyWeatherResponse,
  hourlyWeatherError: "",
  hourlyWeatherIsLoading: false,
});
export default WeatherContext;
