import type { City } from "./types.ts";
export async function fetchCities(userInput: string) {
  if (userInput.trim() === "") return [] as City[];
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
