import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars-list/cars.service';
import { Car } from '../car/car.model';

const initial = {
  id: 0,
  brandName: '',
  modelName: '',
  img: '',
  priceInRub: 0
};

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  public carForm: Car = { ...initial };

  constructor(public service: CarsService) { }

  ngOnInit(): void {}

  addNewCar() {
    this.carForm.id = this.service.cars.getValue().length + 1;
    this.service.addCar(this.carForm);

    this.carForm = { ...initial };
  }
}
