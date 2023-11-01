import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isShowBtn: boolean = false;
  title = 'halogen_website';
  activeMenu: boolean = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);

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
    console.log('toggle');
  }
  showScrollBtn() {
    console.log('abccc');
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
