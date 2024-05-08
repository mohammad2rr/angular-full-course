import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ConvertPipe } from './custom-pipes/convert.pipe';
import { ClassDirDirective } from './custom-directives/class-dir.directive';
import { ClassDir2Directive } from './custom-directives/class-dir2.directive';
import { CustomNgClassDirective } from './custom-directives/custom-ng-class.directive';
import { TimesDirective } from './custom-directives/custom-times.directive';
import { CustomNgForDirective } from './custom-directives/custom-ng-for.directive';
import { CustomNgStyleDirective } from './custom-directives/custom-ng-style.directive';
import { DividerComponent } from './divider/divider.component';
import { RepeatTemplateDirective } from './custom-directives/repeat-template.directive';

@NgModule({
  declarations: [
    CustomCardComponent,
    ConvertPipe,
    ClassDirDirective,
    ClassDir2Directive,
    CustomNgClassDirective,
    TimesDirective,
    CustomNgForDirective,
    CustomNgStyleDirective,
    DividerComponent,
    RepeatTemplateDirective,
  ],
  imports: [CommonModule],
  exports: [
    CustomCardComponent,
    ConvertPipe,
    ClassDirDirective,
    ClassDir2Directive,
    CustomNgClassDirective,
    TimesDirective,
    CustomNgForDirective,
    CustomNgStyleDirective,
    DividerComponent,
    RepeatTemplateDirective,
  ],
})
export class SharedModuleModule {}
