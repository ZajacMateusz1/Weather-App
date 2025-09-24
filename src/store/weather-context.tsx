import { createContext } from "react";
import type {
  City,
  HourlyWeatherResponse,
  DailyWeatherResponse,
} from "../types.ts";
export interface WeatherContextTypes {
  city: City;
  lastCity: City | null;
  handleSetNewCity: (city: City) => void;
  hourlyWeather: HourlyWeatherResponse | null;
  hourlyWeatherError: string | null;
  hourlyWeatherIsLoading: boolean;
  dailyWeather: DailyWeatherResponse | null;
  dailyWeatherError: string | null;
  dailyyWeatherIsLoading: boolean;
  findUserLocation: () => void;
}
const WeatherContext = createContext<WeatherContextTypes>({
  city: {} as City,
  lastCity: null,
  handleSetNewCity: () => {},
  hourlyWeather: null,
  hourlyWeatherError: "",
  hourlyWeatherIsLoading: false,
  dailyWeather: null,
  dailyWeatherError: null,
  dailyyWeatherIsLoading: false,
  findUserLocation: () => {},
});
export default WeatherContext;
