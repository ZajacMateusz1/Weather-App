export interface City {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1: string;
  admin2: string;
  timezone: string;
}
export interface CityStateObj {
  currentCity: City;
  lastCity: City | null;
}
interface HourlyWeather {
  temperature_2m: number[];
  pressure_msl: number[];
  wind_speed_10m: number[];
  precipitation_probability: number[];
  time: string[];
}
interface HourlyWeatherUnits {
  temperature_2m: string;
  pressure_msl: string;
  wind_speed_10m: string;
  precipitation_probability: string;
}
interface DailyWeather {
  sunrise: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  weather_code: number[];
}
interface DailyWeatherUnits {
  temperature_2m_max: string;
  temperature_2m_min: string;
}
export interface WeatherResponse {
  hourly: HourlyWeather;
  hourly_units: HourlyWeatherUnits;
  daily: DailyWeather;
  daily_units: DailyWeatherUnits;
}
