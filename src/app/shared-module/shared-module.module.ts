import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ConvertPipe } from './custom-pipes/convert.pipe';

@NgModule({
  declarations: [CustomCardComponent, ConvertPipe],
  imports: [CommonModule],
  exports: [CustomCardComponent, ConvertPipe],
})
export class SharedModuleModule {}
