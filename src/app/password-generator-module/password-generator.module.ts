import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordGeneratorRoutingModule } from './password-generator-routing.module';
import { PasswordGeneratorHomeComponent } from './password-generator-home/password-generator-home.component';


@NgModule({
  declarations: [
    PasswordGeneratorHomeComponent
  ],
  imports: [
    CommonModule,
    PasswordGeneratorRoutingModule
  ]
})
export class PasswordGeneratorModule { }
