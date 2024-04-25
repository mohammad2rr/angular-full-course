import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ConvertPipe } from './custom-pipes/convert.pipe';
import { ClassDirDirective } from './directives/class-dir.directive';
import { ClassDir2Directive } from './directives/class-dir2.directive';
import { CustomNgClassDirective } from './directives/custom-ng-class.directive';
import { TimesDirective } from './directives/custom-times.directive';

@NgModule({
  declarations: [
    CustomCardComponent,
    ConvertPipe,
    ClassDirDirective,
    ClassDir2Directive,
    CustomNgClassDirective,
    TimesDirective,
  ],
  imports: [CommonModule],
  exports: [
    CustomCardComponent,
    ConvertPipe,
    ClassDirDirective,
    ClassDir2Directive,
    CustomNgClassDirective,
    TimesDirective,
  ],
})
export class SharedModuleModule {}
