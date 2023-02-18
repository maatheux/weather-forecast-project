import {Coordinates} from "./Coordinates";
import {Weather} from "./Weather";
import {MainWeatherInfo} from "./MainWeatherInfo";
import {Wind} from "./Wind";
import {Rain} from "./Rain";
import {Clouds} from "./Clouds";
import {Sys} from "./Sys";

export interface CityWeatherInfo {
  coord: Coordinates,
  weather: Weather[],
  base: string,
  main: MainWeatherInfo,
  visibility: number,
  wind: Wind,
  rain: Rain,
  clouds: Clouds,
  dt: number,
  sys: Sys,
  timezone: number
  id: number,
  name: string,
  cod: number

}
