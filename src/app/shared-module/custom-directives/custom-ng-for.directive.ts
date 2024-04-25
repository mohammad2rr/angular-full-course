import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgFor]',
})
export class CustomNgForDirective {
  @Input('appCustomNgFor') set render(time: number) {
    for (let i = 0; i < time; i++) {
      this.vcRef.createEmbeddedView(this.tempRef, {
        index: i,
        color: 'red',
      });
    }
  }
  constructor(
    private tempRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
