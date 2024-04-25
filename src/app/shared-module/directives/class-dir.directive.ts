import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appClassDir]',
})
export class ClassDirDirective {
  constructor(private elementRef: ElementRef) {
    // console.log('call me');
    // console.log(this.elementRef, 'this.elementRef');
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
    this.elementRef.nativeElement.style.color = 'gold';
  }
}
