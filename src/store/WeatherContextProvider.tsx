import { useCallback, type ReactNode } from "react";
import useFetch from "../hooks/useFetch.ts";
import { fetchCities, fetchDailyWeatherInfo } from "../http.ts";
import WeatherContext from "./weather-context.tsx";
import type { WeatherContextTypes } from "./weather-context.tsx";
import type { City } from "../types.ts";
interface WeatherContextProviderProps {
  children: ReactNode;
}
export default function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  const fetchCitiesFn = useCallback(() => fetchCities("Warsaw"), []);
  const { data, error, isLoading } = useFetch<City>(fetchCitiesFn);
  const weatherCtx: WeatherContextTypes = {
    city: data[0] ?? null,
  };
  async function chuj() {
    const data = await fetchDailyWeatherInfo(
      weatherCtx.city!.latitude,
      weatherCtx.city!.longitude
    );
    console.log(data);
  }
  chuj();
  return <WeatherContext value={weatherCtx}>{children}</WeatherContext>;
}
