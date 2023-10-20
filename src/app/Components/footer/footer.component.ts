import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
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
    window.open('https://twitter.com/halogen_group', '_blank');
  }
  linkedin() {
    // window.location.href = "https://www.instagram.com/halogen_group/"
    window.open('https://www.linkedin.com/company/halogengroup/', '_blank');
  }
  toElem() {
    window.location.href = 'https://halogen-group.com/new-website/#elem';
  }
  toPartner() {
    window.open('https://partner.halobizapps.com/#/', '_blank');
  }
}
