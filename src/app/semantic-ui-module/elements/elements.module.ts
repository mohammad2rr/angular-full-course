import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { SegmentComponent } from './segment/segment.component';
import { PalceHolderComponent } from './place-holder/place-holder.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  declarations: [ElementsHomeComponent, SegmentComponent, PalceHolderComponent],
  imports: [CommonModule, ElementsRoutingModule, SharedModuleModule],
})
export class ElementsModule {}
