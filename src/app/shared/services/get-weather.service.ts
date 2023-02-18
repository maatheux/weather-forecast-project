import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiKey } from '../../core/utils/apiKey.enum'
import { environment } from '../../../environments/environment'
import {CityWeatherInfo} from "../../features/home/interfaces/current-weather/CityWeatherInfo";

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  private readonly myApiKey = ApiKey.apiKey;

  private readonly apiUrl = environment.API_URL;

  constructor(private readonly httpClient: HttpClient) { }

  public getCityWeather(city: string): Observable<CityWeatherInfo> {
    return this.httpClient.get<any>(`${this.apiUrl}?&q=${city}&appid=${this.myApiKey}&units=${'metric'}`)
  }
}
