import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClassDir2]',
})
export class ClassDir2Directive {
  // @Input() backgroundColor = 'pink';
  // اگر به این صورت بنویسیم دفه اول که appClassDir2 توی پرنت صدا زده میشود رنگ صورتی داده میشود و بعد که سراغ  background میرود توی پرنت یک رنگ دیگری را میفرستیم اما دیگر متد سازنده صدا زده نمیشود .
  @Input() set backgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
  constructor(private elementRef: ElementRef) {}
}
