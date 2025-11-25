import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestiveSeasonComponent } from './festive-season.component';

describe('FestiveSeasonComponent', () => {
  let component: FestiveSeasonComponent;
  let fixture: ComponentFixture<FestiveSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestiveSeasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestiveSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
