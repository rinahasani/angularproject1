import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any[], field: string, reverse: boolean = false): any[] {
    if (!Array.isArray(array) || !field) {
      return array;
    }

    const sortOrder = reverse ? -1 : 1;

    return array.sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (valueA === valueB) {
        return 0;
      }

      return valueA < valueB ? -sortOrder : sortOrder;
    });
  }
}
