import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.css'],
})
export class WorkSpaceComponent {
  fruits: string[];
  title: string = 'Learning Angular';

  constructor(private fruitsService: FruitsService) {
    this.fruits = this.fruitsService.getAllFruits();
  }

  onNewFruit(fruit: string) {
    this.fruitsService.addFruit(fruit);
  }
  fruitName: string = '';

  createFruit(fruit: string) {
    if (this.fruitName.trim().length === 0) {
      alert('Invalid fruit name');
      return;
    }
    this.fruitsService.addFruit(fruit);
  }
}
