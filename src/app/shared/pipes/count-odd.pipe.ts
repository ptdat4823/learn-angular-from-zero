import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countOdd',
})
export class CountOddPipe implements PipeTransform {
  transform(value: number[], unit: string = 'item'): string {
    const count = value.filter(num => num % 2 !== 0).length;
    return `${count} ${unit}${count !== 1 ? 's' : ''}`;
  }
}
