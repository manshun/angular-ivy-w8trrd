import { Component, VERSION } from '@angular/core';

import { FruitsService } from './fruits.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title: string = 'Learning Angular';
  fruits: string[];

  constructor(private fruitsService: FruitsService) {
    this.fruits = this.fruitsService.getAllFruits();
  }

  onNewFruit(fruit: string) {
    this.fruitsService.addFruit(fruit);
  }
}
