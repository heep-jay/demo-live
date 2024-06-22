import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSubmissionsComponent } from './campaign-submissions.component';

describe('CampaignSubmissionsComponent', () => {
  let component: CampaignSubmissionsComponent;
  let fixture: ComponentFixture<CampaignSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignSubmissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
