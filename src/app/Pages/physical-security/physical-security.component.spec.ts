import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalSecurityComponent } from './physical-security.component';

describe('PhysicalSecurityComponent', () => {
  let component: PhysicalSecurityComponent;
  let fixture: ComponentFixture<PhysicalSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
