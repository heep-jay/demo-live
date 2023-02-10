import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalogenNavComponent } from './halogen-nav.component';

describe('HalogenNavComponent', () => {
  let component: HalogenNavComponent;
  let fixture: ComponentFixture<HalogenNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalogenNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalogenNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
