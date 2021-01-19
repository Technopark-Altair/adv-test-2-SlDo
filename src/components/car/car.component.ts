import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {CarsService} from '../cars-list/cars.service';
import {Car} from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})

export class CarComponent implements OnInit {
  public id: number;
  public car: Car;

  constructor(private activateRoute: ActivatedRoute, private carsService: CarsService) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.pipe(switchMap(params => params.getAll('id')))
      .subscribe(data => {
        this.id = +data;
        this.carsService.getCarByID(this.id).subscribe(subCar => this.car = subCar);
    });
  }

}
