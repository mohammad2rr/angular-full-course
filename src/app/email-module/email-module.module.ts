import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailModuleRoutingModule } from './email-module-routing.module';
import { EmailHomeComponent } from './email-home/email-home.component';


@NgModule({
  declarations: [
    EmailHomeComponent
  ],
  imports: [
    CommonModule,
    EmailModuleRoutingModule
  ]
})
export class EmailModuleModule { }
