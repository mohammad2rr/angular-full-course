import { Directive } from '@angular/core';

@Directive({
  selector: '[appClassDir]',
})
export class ClassDirDirective {
  constructor() {
    console.log('call me');
  }
}
