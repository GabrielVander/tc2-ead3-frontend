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
  private $isNewAnimalModalOpen = new BehaviorSubject<boolean>(false);
  private $isAnimalModalLoading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private messageService: NzMessageService) {
    this.updateAnimalList();
  }

  get animalList(): BehaviorSubject<Animal[]> {
    return this.$animalList;
  }

  get isAnimalTableLoading(): BehaviorSubject<boolean> {
    return this.$isAnimalTableLoading;
  }

  get isNewAnimalModalOpen(): BehaviorSubject<boolean> {
    return this.$isNewAnimalModalOpen;
  }

  get isAnimalModalLoading(): BehaviorSubject<boolean> {
    return this.$isAnimalModalLoading;
  }

  updateAnimalList(): void {
    this.$isAnimalTableLoading.next(true);
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

  openNewAnimalModal(): void {
    this.$isNewAnimalModalOpen.next(true);
  }

  closeNewAnimalModal(): void {
    this.$isNewAnimalModalOpen.next(false);
  }

  saveNewAnimal(animal: Animal): void {
    this.isAnimalModalLoading.next(true);
    this.http
      .post<ApiResponseMultipleResults<Animal>>(this.$animalApiUrl, animal)
      .toPromise()
      .then(result => {
        if (result.status) {
          this.messageService.success('Animal registered');
        } else {
          this.messageService.error('Something went wrong');
        }
        this.updateAnimalList();
      })
      .catch(error => this.messageService.error(error.message))
      .finally(() => this.$isAnimalModalLoading.next(false))
    ;
  }

}
