import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-halogen-nav',
  templateUrl: './halogen-nav.component.html',
  styleUrls: ['./halogen-nav.component.css']
})
export class HalogenNavComponent implements OnInit {
  @Input() cybermenusL: any;
  @Input() outMenu: any;
  @Input() phyMenu: any;
  @Input() secTechMenu: any;
  @Input() secEduMenu: any;
  @Input() riskMenu: any;
  @Output() btnClick = new EventEmitter
  hash: any;
  // activeMenu: boolean = true;
  urls: any;
  constructor(private router: Router) { }

  ngOnInit(): void {


  }
  ngAfterViewInit() {
    //   if (window.location.hash) {
    //     if (window.location.hash) {
    //       console.log(window.location.hash.slice(1))
    //       let hash = window.location.hash.slice(1)
    //       document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    //     }
    //   }
    console.log("i work")
  }

  toggleMenu() {
    this.btnClick.emit()
  }
  toElem() {
    window.location.href = 'https://halogen-group.com/new-website/security-technologies/elem'
  }
  redirect(url: any) {
    this.btnClick.emit()
    console.log(url)

    // this.activeMenu = false
    window.location.href = url
    // if (window.location.hash) {
    //   this.hash = window.location.hash;
    //   if (this.hash) {

    //     this.hash = String(this.hash.slice(1))
    //     console.log(String(this.hash))
    //     document.getElementById(this.hash)?.scrollIntoView({ behavior: "smooth" });
    //   }
    // }


  }

  scroll() {
    // console.log('abc')
    // if (window.location.hash) {
    //   this.hash = window.location.hash;
    //   if (this.hash) {
    //     console.log(this.hash)
    //     document.getElementById(this.hash)?.scrollIntoView({ behavior: "smooth" });
    //   }
    // }
  }


}



