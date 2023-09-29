import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalodigestDetailComponent } from './halodigest-detail.component';

describe('HalodigestDetailComponent', () => {
  let component: HalodigestDetailComponent;
  let fixture: ComponentFixture<HalodigestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalodigestDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalodigestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
