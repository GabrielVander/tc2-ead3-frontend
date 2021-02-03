import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalTableComponent } from './animal-table.component';

describe('AnimalTableComponent', () => {
  let component: AnimalTableComponent;
  let fixture: ComponentFixture<AnimalTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
