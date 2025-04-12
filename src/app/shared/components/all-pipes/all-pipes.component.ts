import { Component } from '@angular/core';
import { SharedModule } from '../../pipes/shared.pipe';

@Component({
  selector: 'all-pipes',
  templateUrl: './all-pipes.component.html',
  imports: [SharedModule],
})
export class AllPipesComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
