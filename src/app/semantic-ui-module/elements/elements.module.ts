import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { SegmentComponent } from './segment/segment.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    SegmentComponent,
    PlaceHolderComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ]
})
export class ElementsModule { }
