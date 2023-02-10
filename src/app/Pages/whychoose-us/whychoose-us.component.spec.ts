import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhychooseUsComponent } from './whychoose-us.component';

describe('WhychooseUsComponent', () => {
  let component: WhychooseUsComponent;
  let fixture: ComponentFixture<WhychooseUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhychooseUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhychooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
