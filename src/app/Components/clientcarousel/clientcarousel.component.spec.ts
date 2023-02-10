import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcarouselComponent } from './clientcarousel.component';

describe('ClientcarouselComponent', () => {
  let component: ClientcarouselComponent;
  let fixture: ComponentFixture<ClientcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
