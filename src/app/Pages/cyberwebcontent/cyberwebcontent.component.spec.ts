import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberwebcontentComponent } from './cyberwebcontent.component';

describe('CyberwebcontentComponent', () => {
  let component: CyberwebcontentComponent;
  let fixture: ComponentFixture<CyberwebcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyberwebcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyberwebcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
