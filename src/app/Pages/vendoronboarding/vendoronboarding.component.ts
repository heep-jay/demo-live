import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendoronboarding',
  templateUrl: './vendoronboarding.component.html',
  styleUrls: ['./vendoronboarding.component.css'],
})
export class VendoronboardingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  rollsafe() {
    window.open('https://partner.halobizapps.com/#/', '_blank');
  }
  learnmore() {
    window.open('https://partner.halobizapps.com/#/learn-more', '_blank');
  }
}
