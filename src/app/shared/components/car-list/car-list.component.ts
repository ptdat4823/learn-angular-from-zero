import { Component, inject } from '@angular/core';
import { CarService } from '../../../service/car.service';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  imports: [],
})
export class CarList {
  carService = inject(CarService);
  display = '';
  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
