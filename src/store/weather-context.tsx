import { createContext } from "react";
import type { City } from "../types.ts";
export interface WeatherContextTypes {
  city: City | null;
}
const WeatherContext = createContext<WeatherContextTypes>({
  city: null,
});
export default WeatherContext;
