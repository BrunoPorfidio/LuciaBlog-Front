import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    const isDescending = field.charAt(0) === '-';
    const property = isDescending ? field.substring(1) : field;

    array.sort((a: any, b: any) => {
      const valueA = a[property];
      const valueB = b[property];

      if (valueA < valueB) {
        return isDescending ? 1 : -1;
      } else if (valueA > valueB) {
        return isDescending ? -1 : 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}