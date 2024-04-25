import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModuleRoutingModule } from './directives-module-routing.module';
import { DirectivesHomeComponent } from './directives-home/directives-home.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [DirectivesHomeComponent],
  imports: [CommonModule, DirectivesModuleRoutingModule, SharedModuleModule],
})
export class DirectivesModuleModule {}
