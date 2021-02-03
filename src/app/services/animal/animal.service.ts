import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd/message';
import Animal from '../../models/Animal';
import ApiResponseMultipleResults from '../../models/ApiResponseMultipleResults';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private $animalApiUrl = 'https://muddy-scratch-sodium.glitch.me/animal';
  private $isAnimalTableLoading = new BehaviorSubject<boolean>(false);
  private $animalList = new BehaviorSubject<Animal[]>([]);

  constructor(private http: HttpClient, private messageService: NzMessageService) {
    this.updateAnimalList();
  }

  get animalList(): BehaviorSubject<Animal[]> {
    return this.$animalList;
  }

  get isAnimalTableLoading(): BehaviorSubject<boolean> {
    return this.$isAnimalTableLoading;
  }

  updateAnimalList(): void {
    this.$isAnimalTableLoading
      .next(true);
    this.http
      .get<ApiResponseMultipleResults<Animal>>(this.$animalApiUrl)
      .toPromise()
      .then(result => {
        this.$animalList
          .next(result.data);
        this.messageService.info('Animal list updated');
      })
      .catch(error => this.messageService.error(error.message))
      .finally(() => this.$isAnimalTableLoading.next(false));
  }

}
