import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustreadComponent } from './mustread.component';

describe('MustreadComponent', () => {
  let component: MustreadComponent;
  let fixture: ComponentFixture<MustreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
