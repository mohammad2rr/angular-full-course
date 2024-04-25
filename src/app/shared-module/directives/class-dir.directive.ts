import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

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
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'green'
    // );
  }
  // پارامتر اول رویداد میپذیرد و میگوید چه رویدادی صدا زده شد این هاست لیسنر صدا زده شود
  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );
  }
  @HostListener('mouseleave') onMouseOut() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'gold'
    );
  }
}
