import { Pipe, PipeTransform } from '@angular/core';

// {{ 2 | power:3 }} => 8
// {{ 5 | power }} => 5

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }

}
