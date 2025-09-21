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
export interface HourlyWeatherResponse {
  hourly: HourlyWeather;
  hourly_units: HourlyWeatherUnits;
}
