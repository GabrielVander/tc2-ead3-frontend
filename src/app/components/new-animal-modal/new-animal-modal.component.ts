import {Component, OnInit} from '@angular/core';
import {AnimalService} from '../../services/animal/animal.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Animal from '../../models/Animal';

@Component({
  selector: 'app-new-animal-modal',
  templateUrl: './new-animal-modal.component.html'
})
export class NewAnimalModalComponent implements OnInit {

  isVisible = false;
  isLoading = false;
  formGroup!: FormGroup;

  constructor(private animalService: AnimalService, private formBuilder: FormBuilder) {
    this.animalService.isNewAnimalModalOpen.subscribe(value => this.isVisible = value);
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(0)]],
      weight: [null, [Validators.required, Validators.min(0)]],
      race: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
  }

  handleOk(): void {
    if (this.validateForm()) {
      this.saveAnimal();
      this.formGroup.reset();
      this.animalService.closeNewAnimalModal();
    }
  }

  handleCancel(): void {
    this.formGroup.reset();
    this.animalService.closeNewAnimalModal();
  }

  private validateForm(): boolean {
    for (const field of Object.keys(this.formGroup.controls)) {
      this.formGroup.controls[field].markAsDirty();
      this.formGroup.controls[field].updateValueAndValidity();
    }
    return this.formGroup.valid;
  }

  private saveAnimal(): void {
    const animal: Animal = {
      name: this.formGroup.controls.name.value,
      age: this.formGroup.controls.age.value,
      weight: this.formGroup.controls.weight.value,
      race: this.formGroup.controls.race.value,
      type: this.formGroup.controls.type.value,
    };

    this.animalService.saveNewAnimal(animal);
  }
}
