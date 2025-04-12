import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterInvalidItem',
})
export class FilterInvalidItemPipe implements PipeTransform {
  transform(value: any[]) {
    return value.filter(item => item !== null && item !== undefined);
  }
}
