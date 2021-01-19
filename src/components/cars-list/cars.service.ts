import { Car } from '../car/car.model';
import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CarsService {
  public cars = new BehaviorSubject([
    { id: 1, brandName: 'BMW', modelName: 'M4', priceInRub: 2_900_000, img: 'https://images.unsplash.com/photo-1549556889-cba541c33c0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
    { id: 2, brandName: 'Audi', modelName: 'R8 GT', priceInRub: 8_700_000, img: 'https://images.unsplash.com/photo-1536150794560-43f988aec18e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80' },
    { id: 3, brandName: 'Audi', modelName: 'A4', priceInRub: 3_200_000, img: 'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' },
    { id: 4, brandName: 'Mercedes-Benz', modelName: 'AMG GTS', priceInRub: 3_800_000, img: 'https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80' },
  ]);

  public getAllCars(): Observable<Car[]> {
    return this.cars.asObservable();
  }

  public getCarsByBrand(brand: string): Observable<Car[]> {
    return this.getAllCars().pipe(map((car) => car.filter(currentCar => currentCar.brandName === brand)));
  }

  getCarByID(id) {
    return this.getAllCars().pipe(map((car) => car.find(currentCar => currentCar.id === id)));
  }

  addCar(car: Car) {
    this.cars.next([...this.cars.getValue(), car]);
  }
}
