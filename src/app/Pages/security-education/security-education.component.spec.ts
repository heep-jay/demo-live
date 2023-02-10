import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityEducationComponent } from './security-education.component';

describe('SecurityEducationComponent', () => {
  let component: SecurityEducationComponent;
  let fixture: ComponentFixture<SecurityEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
