import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendoronboardingComponent } from './vendoronboarding.component';

describe('VendoronboardingComponent', () => {
  let component: VendoronboardingComponent;
  let fixture: ComponentFixture<VendoronboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendoronboardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendoronboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
