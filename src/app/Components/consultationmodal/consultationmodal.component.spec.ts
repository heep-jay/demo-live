import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationmodalComponent } from './consultationmodal.component';

describe('ConsultationmodalComponent', () => {
  let component: ConsultationmodalComponent;
  let fixture: ComponentFixture<ConsultationmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
