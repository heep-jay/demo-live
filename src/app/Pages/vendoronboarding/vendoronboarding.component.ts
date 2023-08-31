import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Service/navbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendoronboarding',
  templateUrl: './vendoronboarding.component.html',
  styleUrls: ['./vendoronboarding.component.css'],
})
export class VendoronboardingComponent implements OnInit {
  constructor(private route: ActivatedRoute, public navb: NavbarService) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments) => {
      // 'segments' is an array of path segments in the current route
      console.log('Current route segments:', segments[0].path);
      if (segments[0].path === 'partner-onboarding') {
        this.navb.hide();
      } else {
        this.navb.show();
      }
    });
    window.scrollTo(0, 0);
  }

  rollsafe() {
    window.open('https://partner.halobizapps.com/#/', '_blank');
  }
  learnmore() {
    window.open('https://partner.halobizapps.com/#/learn-more', '_blank');
  }
}
