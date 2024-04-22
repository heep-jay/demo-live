import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cybermenu',
  templateUrl: './cybermenu.component.html',
  styleUrls: ['./cybermenu.component.css'],
})
export class CybermenuComponent implements OnInit {
  @Input() cyberR: any;
  @Input() cyberL: any;
  constructor() {}

  ngOnInit(): void {}

  redirect(data: any) {
    window.location.href = data;
  }
  toPhy() {
    window.location.href = `https://halogen-group.com/new-website/other-security-solutions#phy`;
  }
  toElem() {
    window.location.href = `https://halogen-group.com/new-website/other-security-solutions#elem`;
  }
  toIdentitys() {
    window.location.href = `https://halogen-group.com/new-website/other-security-solutions#identity`;
  }
}
