import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // {{ products | filter:'price':'>':300}}

  transform(items: any[], fieldName:string, operator: string, value: number): any[] {
    
    if (!items || !fieldName  || !operator || !value) {
      return items;
    }


    if (operator === '<') {
      return items.filter ( item => item[fieldName] < value);
    }

    if (operator === '>') {
      return items.filter ( item => item[fieldName] > value);
    }

    if (operator === '==') {
      return items.filter ( item => item[fieldName] == value);
    }

    return items;
  }

}
