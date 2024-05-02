import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiModuleRoutingModule } from './wiki-module-routing.module';
import { WikiHomeComponent } from './wiki-home/wiki-home.component';


@NgModule({
  declarations: [
    WikiHomeComponent
  ],
  imports: [
    CommonModule,
    WikiModuleRoutingModule
  ]
})
export class WikiModuleModule { }
