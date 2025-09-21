import type { City, HourlyWeatherResponse } from "./types.ts";
export async function fetchCities(userInput: string) {
  if (userInput.trim() === "" || userInput.length < 2) return [] as City[];
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      userInput
    )}&count=10&language=en&format=json`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }
  const data = await response.json();
  return (data.results ?? []) as City[];
}

export async function fetchDailyWeatherInfo(
  cityLatitude: number,
  cityLongitude: number
) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${cityLongitude}&hourly=temperature_2m,wind_speed_10m,precipitation_probability,pressure_msl&timezone=auto&forecast_days=1`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data!");
  }
  const data = await response.json();
  return (data ?? {}) as HourlyWeatherResponse;
}
