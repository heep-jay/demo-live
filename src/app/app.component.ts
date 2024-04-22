import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isShowBtn: boolean = false;
  title = 'halogen_website';
  activeMenu: boolean = false;
  isOpen: boolean = true;

  constructor(private router: Router) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.canonicalUrl();
    // this.win = this.showScrollBtn()

    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.isShowBtn = true;
      } else {
        this.isShowBtn = false;
      }
    };
  }

  toggleMenu() {
    // console.log('toggle');
  }
  showScrollBtn() {
    // console.log('abccc');
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  onClose() {
    this.isOpen = false;
  }
}
