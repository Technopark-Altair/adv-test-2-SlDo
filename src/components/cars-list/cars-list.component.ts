import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  private subs = new Subscription();
  public brands: string[] = [];

  constructor(public carService: CarsService) { }

  ngOnInit(): void {
    const carSubscriber = this.carService.getAllCars().subscribe(subCar => {
      this.brands = [...new Set(subCar.map(car => car.brandName))];
    });

    this.subs.add(carSubscriber);
  }
}
