import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormModuleRoutingModule } from './reactive-form-module-routing.module';
import { ReactiveFHomeComponent } from './reactive-f-home/reactive-f-home.component';


@NgModule({
  declarations: [
    ReactiveFHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormModuleRoutingModule
  ]
})
export class ReactiveFormModuleModule { }
