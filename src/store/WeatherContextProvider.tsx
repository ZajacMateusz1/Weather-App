import { useCallback, useState, type ReactNode } from "react";
import useFetch from "../hooks/useFetch.ts";
import { fetchDailyWeatherInfo } from "../http.ts";
import WeatherContext from "./weather-context.tsx";
import type { WeatherContextTypes } from "./weather-context.tsx";
import type { City, HourlyWeatherResponse } from "../types.ts";
const startCity: City = {
  admin1: "Masovian",
  admin2: "Warszawa",
  country: "Poland",
  id: 756135,
  latitude: 52.22977,
  longitude: 21.01178,
  name: "Warsaw",
  timezone: "Europe/Warsaw",
};
interface WeatherContextProviderProps {
  children: ReactNode;
}
export default function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  const [currentCity, setCurrentCity] = useState<City>(startCity);
  function handleSetNewCity(city: City) {
    setCurrentCity(city);
  }
  const fetchDailyWeatherInfoCallback = useCallback(
    () => fetchDailyWeatherInfo(currentCity.latitude, currentCity.longitude),
    [currentCity.latitude, currentCity.longitude]
  );
  const {
    data: hourlyWeather,
    error: hourlyWeatherError,
    isLoading: hourlyWeatherIsLoading,
  } = useFetch<HourlyWeatherResponse>(
    fetchDailyWeatherInfoCallback,
    {} as HourlyWeatherResponse
  );
  const weatherCtx: WeatherContextTypes = {
    city: currentCity,
    handleSetNewCity: handleSetNewCity,
    hourlyWeather: hourlyWeather,
    hourlyWeatherError: hourlyWeatherError,
    hourlyWeatherIsLoading: hourlyWeatherIsLoading,
  };
  return <WeatherContext value={weatherCtx}>{children}</WeatherContext>;
}
