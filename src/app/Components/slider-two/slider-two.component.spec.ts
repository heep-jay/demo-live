import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTwoComponent } from './slider-two.component';

describe('SliderTwoComponent', () => {
  let component: SliderTwoComponent;
  let fixture: ComponentFixture<SliderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
