import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanticUiModuleRoutingModule } from './semantic-ui-module-routing.module';
import { SemanticUiHomeComponent } from './semantic-ui-home/semantic-ui-home.component';


@NgModule({
  declarations: [
    SemanticUiHomeComponent
  ],
  imports: [
    CommonModule,
    SemanticUiModuleRoutingModule
  ]
})
export class SemanticUiModuleModule { }
