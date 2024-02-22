import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModuleRoutingModule } from './pipes-module-routing.module';
import { PipesHomeComponent } from './pipes-home/pipes-home.component';


@NgModule({
  declarations: [
    PipesHomeComponent
  ],
  imports: [
    CommonModule,
    PipesModuleRoutingModule
  ]
})
export class PipesModuleModule { }
