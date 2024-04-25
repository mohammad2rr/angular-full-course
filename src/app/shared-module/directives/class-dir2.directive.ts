import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClassDir2]',
})
export class ClassDir2Directive {
  // @Input() backgroundColor = 'pink';
  // اگر به این صورت بنویسیم دفه اول که appClassDir2 توی پرنت صدا زده میشود رنگ صورتی داده میشود و بعد که سراغ  background میرود توی پرنت یک رنگ دیگری را میفرستیم اما دیگر متد سازنده صدا زده نمیشود .
  // @Input() set backgroundColor(color: string) {
  //   this.elementRef.nativeElement.style.backgroundColor = color;
  // }

  // استفاده کردن از aliase برای اینکه توی  directives.home.component.html    برای استفاده از دایرکتیو دوتا چیز را استفاده نکنیم
  // روش اول
  // @Input() set appClassDir2(color: string) {
  //   this.elementRef.nativeElement.style.backgroundColor = color;
  // }
  // روش دوم

  @Input('appClassDir2') set appClassDir2(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
  constructor(private elementRef: ElementRef) {}
}
