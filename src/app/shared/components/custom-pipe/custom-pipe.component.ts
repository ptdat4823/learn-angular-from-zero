import { Component } from '@angular/core';
import { FilterInvalidItemPipe } from '../../pipes/filter-invalid-item.pipe';
import { CountOddPipe } from '../../pipes/count-odd.pipe';

@Component({
  selector: 'custom-pipe',
  templateUrl: './custom-pipe.component.html',
  imports: [FilterInvalidItemPipe, CountOddPipe],
})
export class CustomPipeComponent {
  wrongArray = [null, 3, undefined, 2, 6, 4, 8, 6];
}
