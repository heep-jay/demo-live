import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprpopupComponent } from './gdprpopup.component';

describe('GdprpopupComponent', () => {
  let component: GdprpopupComponent;
  let fixture: ComponentFixture<GdprpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdprpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdprpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
