import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ConvertPipe } from './custom-pipes/convert.pipe';
import { ClassDirDirective } from './directives/class-dir.directive';

@NgModule({
  declarations: [CustomCardComponent, ConvertPipe, ClassDirDirective],
  imports: [CommonModule],
  exports: [CustomCardComponent, ConvertPipe, ClassDirDirective],
})
export class SharedModuleModule {}
