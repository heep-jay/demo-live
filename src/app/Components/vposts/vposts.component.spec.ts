import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpostsComponent } from './vposts.component';

describe('VpostsComponent', () => {
  let component: VpostsComponent;
  let fixture: ComponentFixture<VpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
