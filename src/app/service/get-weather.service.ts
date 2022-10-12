import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private readonly httpClient: HttpClient) { }

  public getCityWeather(city: string): Observable<any> {
    return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?&q=${city}&appid=b90380aa20d38aaf6431db3ab81ed207`)
  }
}
