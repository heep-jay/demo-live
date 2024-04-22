import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalSecurityComponent } from './national-security.component';

describe('NationalSecurityComponent', () => {
  let component: NationalSecurityComponent;
  let fixture: ComponentFixture<NationalSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
