import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css'],
})
export class ThankComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  fb() {
    window.open('https://www.facebook.com/HalogenNGR', '_blank');
  }
  insta() {
    // window.location.href = "https://www.instagram.com/halogen_group/"
    window.open('https://www.instagram.com/halogen_group', '_blank');
  }
  twitter() {
    // window.location.href = "https://www.instagram.com/halogen_group/"
    window.open('https://x.com/halogen_group', '_blank');
  }
  linkedin() {
    // window.location.href = "https://www.instagram.com/halogen_group/"
    window.open('https://www.linkedin.com/company/halogengroup/', '_blank');
  }
}
