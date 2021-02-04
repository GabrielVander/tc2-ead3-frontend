import {Component} from '@angular/core';
import {AnimalService} from '../../services/animal/animal.service';
import Animal from '../../models/Animal';

@Component({
  selector: 'app-animal-table',
  templateUrl: './animal-table.component.html'
})
export class AnimalTableComponent {

  animalList: Animal[];
  isLoading: boolean;

  constructor(private animalService: AnimalService) {
    this.animalService.animalList.subscribe(value => this.animalList = value);
    this.animalService.isAnimalTableLoading.subscribe(value => this.isLoading = value);
  }

  deleteAnimal(animal: Animal): void {
    this.animalService.deleteAnimal(animal._id);
  }
}
