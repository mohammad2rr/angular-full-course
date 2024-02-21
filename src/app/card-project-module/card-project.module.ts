import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardProjectRoutingModule } from './card-project-routing.module';
import { CardProjectHomeComponent } from './card-project-home/card-project-home.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [CardProjectHomeComponent],
  imports: [CommonModule, CardProjectRoutingModule, SharedModuleModule],
})
export class CardProjectModule {}
