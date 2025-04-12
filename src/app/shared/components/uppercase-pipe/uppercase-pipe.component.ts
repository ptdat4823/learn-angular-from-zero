import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'uppercase-pipe',
  templateUrl: './uppercase-pipe.component.html',
  imports: [UpperCasePipe],
})
export class UppercasePipeComponent {
  wrongText = 'This text should be uppercase';
}
