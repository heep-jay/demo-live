import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBoxComponent } from './gallery-box.component';

describe('GalleryBoxComponent', () => {
  let component: GalleryBoxComponent;
  let fixture: ComponentFixture<GalleryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
