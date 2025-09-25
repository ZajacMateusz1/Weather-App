import { useCallback, useState, type ReactNode } from "react";
import useFetch from "../hooks/useFetch.ts";
import { fetchWeatherInfo } from "../http.ts";
import WeatherContext from "./weather-context.tsx";
import type { WeatherContextTypes } from "./weather-context.tsx";
import type { City, CityStateObj, WeatherResponse } from "../types.ts";
const defaultCityObj: CityStateObj = {
  currentCity: {
    admin1: "Masovian",
    admin2: "Warszawa",
    country: "Poland",
    id: 756135,
    latitude: 52.22977,
    longitude: 21.01178,
    name: "Warsaw",
    timezone: "Europe/Warsaw",
  },
  lastCity: null,
};
const stored = localStorage.getItem("startCityObj");

const startCityObj: CityStateObj = stored ? JSON.parse(stored) : defaultCityObj;

interface WeatherContextProviderProps {
  children: ReactNode;
}
export default function WeatherContextProvider({
  children,
}: WeatherContextProviderProps) {
  const [cityObj, setCityObj] = useState<CityStateObj>(startCityObj);
  function handleSetNewCity(city: City) {
    let last = cityObj.lastCity;
    if (cityObj.currentCity.name !== "your location") {
      last = cityObj.currentCity;
    }
    const newCityObj = {
      currentCity: city,
      lastCity: last,
    };
    setCityObj(newCityObj);
    localStorage.setItem("startCityObj", JSON.stringify(newCityObj));
  }
  const fetchWeatherInfoCallback = useCallback(
    () =>
      fetchWeatherInfo(
        cityObj.currentCity.latitude,
        cityObj.currentCity.longitude
      ),
    [cityObj.currentCity.latitude, cityObj.currentCity.longitude]
  );
  const {
    data: weather,
    error: weatherError,
    isLoading: weatherIsLoading,
  } = useFetch<WeatherResponse>(fetchWeatherInfoCallback);
  function findUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentLocation = {
        name: "your location",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      } as City;
      setCityObj({
        currentCity: currentLocation,
        lastCity: cityObj.currentCity,
      });
    });
  }
  const weatherCtx: WeatherContextTypes = {
    city: cityObj.currentCity,
    lastCity: cityObj.lastCity,
    handleSetNewCity: handleSetNewCity,
    weather: weather,
    weatherError: weatherError,
    weatherIsLoading: weatherIsLoading,
    findUserLocation: findUserLocation,
  };
  return <WeatherContext value={weatherCtx}>{children}</WeatherContext>;
}
