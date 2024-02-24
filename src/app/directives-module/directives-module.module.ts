import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModuleRoutingModule } from './directives-module-routing.module';
import { DirectivesHomeComponent } from './directives-home/directives-home.component';


@NgModule({
  declarations: [
    DirectivesHomeComponent
  ],
  imports: [
    CommonModule,
    DirectivesModuleRoutingModule
  ]
})
export class DirectivesModuleModule { }
