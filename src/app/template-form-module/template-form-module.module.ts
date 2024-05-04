import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormModuleRoutingModule } from './template-form-module-routing.module';
import { TemplateFHomeComponent } from './template-f-home/template-f-home.component';


@NgModule({
  declarations: [
    TemplateFHomeComponent
  ],
  imports: [
    CommonModule,
    TemplateFormModuleRoutingModule
  ]
})
export class TemplateFormModuleModule { }
