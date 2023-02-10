import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewscarouselComponent } from './newscarousel.component';

describe('NewscarouselComponent', () => {
  let component: NewscarouselComponent;
  let fixture: ComponentFixture<NewscarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewscarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewscarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
