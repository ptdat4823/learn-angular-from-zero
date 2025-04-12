import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterInvalidItemPipe } from './filter-invalid-item.pipe';

@NgModule({
  declarations: [],
  imports: [CommonModule, FilterInvalidItemPipe],
  exports: [DatePipe, UpperCasePipe, DecimalPipe, CurrencyPipe, FilterInvalidItemPipe],
  providers: [],
})
export class SharedModule {}
