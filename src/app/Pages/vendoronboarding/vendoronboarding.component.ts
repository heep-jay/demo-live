import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/Service/navbar.service';

@Component({
  selector: 'app-vendoronboarding',
  templateUrl: './vendoronboarding.component.html',
  styleUrls: ['./vendoronboarding.component.css'],
})
export class VendoronboardingComponent implements OnInit {
  constructor(public navb: NavbarService) {}

  ngOnInit(): void {
    this.navb.hide();
    window.scrollTo(0, 0);
  }

  rollsafe() {
    window.open('https://partner.halobizapps.com/#/', '_blank');
  }
  learnmore() {
    window.open('https://partner.halobizapps.com/#/learn-more', '_blank');
  }
}
