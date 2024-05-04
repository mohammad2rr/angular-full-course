import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomValidationModuleRoutingModule } from './custom-validation-module-routing.module';
import { CustomVHomeComponent } from './custom-v-home/custom-v-home.component';


@NgModule({
  declarations: [
    CustomVHomeComponent
  ],
  imports: [
    CommonModule,
    CustomValidationModuleRoutingModule
  ]
})
export class CustomValidationModuleModule { }
