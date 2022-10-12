import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from './service/get-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public weatherRes: any;

  constructor(private weatherService: GetWeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCityWeather('Rio de Janeiro').subscribe({
      next: res => this.weatherRes = res,
      error: error => console.error(error),
    })
  }

}
