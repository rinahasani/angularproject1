import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): string {
    if (value && value.length === 16) {
      return value.replace(/(.{4})/g, '$1-').slice(0, -1);
    } else {
      throw new Error('Invalid credit card number');
    }
  }
}
