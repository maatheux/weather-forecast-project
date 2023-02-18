import { Component, OnInit } from '@angular/core';
import {GetWeatherService} from "../../../../shared/services/get-weather.service";
import {MessageService} from "primeng/api";
import {CityWeatherInfo} from "../../interfaces/current-weather/CityWeatherInfo";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  providers: [MessageService],
})
export class CurrentWeatherComponent implements OnInit {

  public insertedCity: string = '';

  public cityWeatherInfo?: CityWeatherInfo;

  public temperatureValue?: string;
  public datetimeValue?: string;

  constructor(private weatherService: GetWeatherService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  public GetCityWeather(element: any): void {
    this.weatherService.getCityWeather(this.insertedCity).subscribe({
      next: (res: CityWeatherInfo) => {
        this.cityWeatherInfo = res;
        this.temperatureValue = `${Math.round(this.cityWeatherInfo.main.temp)}º`
        this.datetimeValue = `${new Date().toDateString()} ${new Date().toLocaleTimeString()}`;
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'City not found', detail: `We didn't find the city: ${this.insertedCity}`, life: 3000, key: 'tr'})
      },
      complete: () => {
        element.hide();
        this.insertedCity = '';
      }
    })
  }

}
