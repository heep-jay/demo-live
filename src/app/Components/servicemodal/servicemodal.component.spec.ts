import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicemodalComponent } from './servicemodal.component';

describe('ServicemodalComponent', () => {
  let component: ServicemodalComponent;
  let fixture: ComponentFixture<ServicemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicemodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
