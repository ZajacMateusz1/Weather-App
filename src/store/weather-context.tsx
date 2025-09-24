import { createContext } from "react";
import type {
  City,
  HourlyWeatherResponse,
  DailyWeatherResponse,
} from "../types.ts";
export interface WeatherContextTypes {
  city: City;
  handleSetNewCity: (city: City) => void;
  hourlyWeather: HourlyWeatherResponse | null;
  hourlyWeatherError: string | null;
  hourlyWeatherIsLoading: boolean;
  dailyWeather: DailyWeatherResponse | null;
  dailyWeatherError: string | null;
  dailyyWeatherIsLoading: boolean;
}
const WeatherContext = createContext<WeatherContextTypes>({
  city: {} as City,
  handleSetNewCity: () => {},
  hourlyWeather: null,
  hourlyWeatherError: "",
  hourlyWeatherIsLoading: false,
  dailyWeather: null,
  dailyWeatherError: null,
  dailyyWeatherIsLoading: false,
});
export default WeatherContext;
