import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModuleRoutingModule } from './pipes-module-routing.module';
import { PipesHomeComponent } from './pipes-home/pipes-home.component';
import { ConvertPipe } from '../shared-module/convert.pipe';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [PipesHomeComponent],
  imports: [CommonModule, PipesModuleRoutingModule, SharedModuleModule],
})
export class PipesModuleModule {}
