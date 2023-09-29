import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalodigestComponent } from './halodigest.component';

describe('HalodigestComponent', () => {
  let component: HalodigestComponent;
  let fixture: ComponentFixture<HalodigestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalodigestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalodigestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
