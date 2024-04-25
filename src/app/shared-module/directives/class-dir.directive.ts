import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClassDir]',
})
export class ClassDirDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // console.log('call me');
    // console.log(this.elementRef, 'this.elementRef');
    // this.elementRef.nativeElement.style.backgroundColor = 'blue';
    // this.elementRef.nativeElement.style.color = 'gold';
    //.....................................................................
    // using renderer library for changing background insted of element ref
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );
  }
}
