import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  private fruits: string[];

  constructor() {
    this.fruits = [];
  }

  public addFruit(fruit: string) {
    this.fruits.push(fruit);
  }

  public getAllFruits() {
    return this.fruits;
  }
}
