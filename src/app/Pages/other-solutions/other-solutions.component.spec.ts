import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSolutionsComponent } from './other-solutions.component';

describe('OtherSolutionsComponent', () => {
  let component: OtherSolutionsComponent;
  let fixture: ComponentFixture<OtherSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
