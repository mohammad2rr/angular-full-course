import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ConvertPipe } from './custom-pipes/convert.pipe';
import { ClassDirDirective } from './directives/class-dir.directive';
import { ClassDir2Directive } from './directives/class-dir2.directive';
import { CustomNgClassDirective } from './directives/custom-ng-class.directive';
import { CustomStructuralDirDirective } from './directives/custom-structural-dir.directive';

@NgModule({
  declarations: [
    CustomCardComponent,
    ConvertPipe,
    ClassDirDirective,
    ClassDir2Directive,
    CustomNgClassDirective,
    CustomStructuralDirDirective,
  ],
  imports: [CommonModule],
  exports: [
    CustomCardComponent,
    ConvertPipe,
    ClassDirDirective,
    ClassDir2Directive,
    CustomNgClassDirective,
    CustomStructuralDirDirective,
  ],
})
export class SharedModuleModule {}
