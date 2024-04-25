import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomNgClass]',
})
export class CustomNgClassDirective {
  @Input('appCustomNgClass') set ClassNames(classObj: any) {
    for (let key in classObj) {
      // console.log(key, 'key'); // class
      // console.log(classObj[key], 'value'); // true   | false
      if (classObj[key]) {
        this.elementRef.nativeElement.classList.add(key);
      } else {
        this.elementRef.nativeElement.classList.remove(key);
      }
    }

    // console.log(classObj, 'classObj');
  }

  constructor(private elementRef: ElementRef) {}
}
