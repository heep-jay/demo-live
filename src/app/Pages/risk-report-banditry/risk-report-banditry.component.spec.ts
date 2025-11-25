import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskReportBanditryComponent } from './risk-report-banditry.component';

describe('RiskReportBanditryComponent', () => {
  let component: RiskReportBanditryComponent;
  let fixture: ComponentFixture<RiskReportBanditryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskReportBanditryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskReportBanditryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
