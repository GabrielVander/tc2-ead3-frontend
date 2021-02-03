import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewAnimalModalComponent } from './new-animal-modal.component';

describe('NewAnimalModalComponent', () => {
  let component: NewAnimalModalComponent;
  let fixture: ComponentFixture<NewAnimalModalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnimalModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAnimalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
