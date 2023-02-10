import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutioncarouselComponent } from './solutioncarousel.component';

describe('SolutioncarouselComponent', () => {
  let component: SolutioncarouselComponent;
  let fixture: ComponentFixture<SolutioncarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutioncarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutioncarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
