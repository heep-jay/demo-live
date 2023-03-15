import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TofuseComponent } from './tofuse.component';

describe('TofuseComponent', () => {
  let component: TofuseComponent;
  let fixture: ComponentFixture<TofuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TofuseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TofuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
