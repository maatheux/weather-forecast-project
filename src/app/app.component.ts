import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from './shared/services/get-weather.service';

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
      complete: () => console.log(this.weatherRes),
    })
  }

}
