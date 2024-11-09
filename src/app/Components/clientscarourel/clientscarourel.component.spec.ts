import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientscarourelComponent } from './clientscarourel.component';

describe('ClientscarourelComponent', () => {
  let component: ClientscarourelComponent;
  let fixture: ComponentFixture<ClientscarourelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientscarourelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientscarourelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
