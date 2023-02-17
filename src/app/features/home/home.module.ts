import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeatherHighlightsComponent } from './components/weather-highlights/weather-highlights.component';
import { NextWeatherForecastComponent } from './components/next-weather-forecast/next-weather-forecast.component';
import { WeatherMapComponent } from './components/weather-map/weather-map.component';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {FormsModule} from "@angular/forms";
import {ToastModule} from 'primeng/toast';
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";



@NgModule({
  declarations: [
    CurrentWeatherComponent,
    WeatherHighlightsComponent,
    NextWeatherForecastComponent,
    WeatherMapComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    OverlayPanelModule,
    FormsModule,
    ToastModule,
    RippleModule,
    InputTextModule,
  ],
  exports: [
    CurrentWeatherComponent,
    WeatherHighlightsComponent,
    NextWeatherForecastComponent,
    WeatherMapComponent,
  ]
})
export class HomeModule { }
