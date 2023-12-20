import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-halogen-nav',
  templateUrl: './halogen-nav.component.html',
  styleUrls: ['./halogen-nav.component.css'],
})
export class HalogenNavComponent implements OnInit {
  @Input() cybermenusL: any;
  @Input() outMenu: any;
  @Input() phyMenu: any;
  @Input() secTechMenu: any;
  @Input() secEduMenu: any;
  @Input() riskMenu: any;
  @Output() btnClick = new EventEmitter();
  hash: any;
  // activeMenu: boolean = true;
  urls: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.btnClick.emit();
  }
  toElem() {
    window.location.href =
      'https://halogen-group.com/new-website/security-technologies/elem';
  }
  redirect(url: any) {
    this.btnClick.emit();
    console.log(url);

    // this.activeMenu = false
    window.location.href = url;
  }
}
