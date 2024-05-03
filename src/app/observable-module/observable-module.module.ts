import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableModuleRoutingModule } from './observable-module-routing.module';
import { ObsHomeComponent } from './obs-home/obs-home.component';


@NgModule({
  declarations: [
    ObsHomeComponent
  ],
  imports: [
    CommonModule,
    ObservableModuleRoutingModule
  ]
})
export class ObservableModuleModule { }
