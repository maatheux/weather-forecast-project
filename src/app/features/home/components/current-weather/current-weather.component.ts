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
  public weatherDescription?: string;

  constructor(private weatherService: GetWeatherService, private messageService: MessageService) { }

  ngOnInit(): void {
    // const d = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds());
    // d.setUTCSeconds(32400);
    // console.log(d.toLocaleTimeString('en-US', {timeStyle: 'short'}))
  }

  public GetCityWeather(element: any): void {
    this.weatherService.getCityWeather(this.insertedCity).subscribe({
      next: (res: CityWeatherInfo) => {
        this.cityWeatherInfo = res;
        this.temperatureValue = `${Math.round(this.cityWeatherInfo.main.temp)}º`

        const d = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate(), new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds());
        d.setUTCSeconds(res.timezone);
        this.datetimeValue = `${d.toLocaleString('en-US',{timeStyle: 'short', dateStyle: 'full'})}`;

        this.weatherDescription = this.cityWeatherInfo.weather[0].description.split(" ").map(word => {
          word = word[0].toUpperCase() + word.slice(1, word.length);
          return word;
        }).join(" ");
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
