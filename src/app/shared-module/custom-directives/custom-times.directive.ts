import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimesDirective]',
})
export class TimesDirective {
  @Input('appTimesDirective') set render(time: number) {
    for (let i = 0; i < time; i++) {
      this.vcRef.createEmbeddedView(this.tempRef, {});
    }
  }

  // TemplateRef Represents an embedded template that can be used to instantiate embedded views
  // ViewContainerRef Represents a container where one or more views can be attached to a component.
  constructor(
    private tempRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
