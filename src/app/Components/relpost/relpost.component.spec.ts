import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelpostComponent } from './relpost.component';

describe('RelpostComponent', () => {
  let component: RelpostComponent;
  let fixture: ComponentFixture<RelpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
