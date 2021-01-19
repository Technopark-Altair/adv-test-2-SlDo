import { Component } from '@angular/core';
import {CarsService} from '../components/cars-list/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'testProject';

  constructor(public carService: CarsService) {
  }
}
