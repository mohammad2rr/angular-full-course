import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): any {
    //console.log(value, 'value');
    //console.log(args, 'args');
    if (!value) {
      return '';
    }
    switch (targetUnits) {
      case 'km':
        return value * 1.6;
      case 'm':
        return value * 1.6 * 1000;
      case 'cm':
        return value * 1.6 * 1000 * 100;
      default:
        throw new Error('not supported :' + targetUnits);
    }
  }
}
