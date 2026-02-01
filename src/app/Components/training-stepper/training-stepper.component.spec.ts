import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingStepperComponent } from './training-stepper.component';

describe('TrainingStepperComponent', () => {
  let component: TrainingStepperComponent;
  let fixture: ComponentFixture<TrainingStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
