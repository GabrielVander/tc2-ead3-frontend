import {Component} from '@angular/core';
import {AnimalService} from './services/animal/animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'My Sweet Little Animals';

  constructor(private animalService: AnimalService) {
  }

  openNewAnimalModal(): void {
    this.animalService.openNewAnimalModal();
  }
}
