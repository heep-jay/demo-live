import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTechnologiesComponent } from './security-technologies.component';

describe('SecurityTechnologiesComponent', () => {
  let component: SecurityTechnologiesComponent;
  let fixture: ComponentFixture<SecurityTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityTechnologiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
