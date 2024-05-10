import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherModuleRoutingModule } from './weather-module-routing.module';
import { WeatherHomeComponent } from './weather-home/weather-home.component';


@NgModule({
  declarations: [
    WeatherHomeComponent
  ],
  imports: [
    CommonModule,
    WeatherModuleRoutingModule
  ]
})
export class WeatherModuleModule { }
