import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybermenuComponent } from './cybermenu.component';

describe('CybermenuComponent', () => {
  let component: CybermenuComponent;
  let fixture: ComponentFixture<CybermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CybermenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
