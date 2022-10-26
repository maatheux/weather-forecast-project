import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextWeatherForecastComponent } from './next-weather-forecast.component';

describe('NextWeatherForecastComponent', () => {
  let component: NextWeatherForecastComponent;
  let fixture: ComponentFixture<NextWeatherForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextWeatherForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
