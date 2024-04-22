import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-navbar-new',
  templateUrl: './navbar-new.component.html',
  styleUrls: ['./navbar-new.component.css'],
})
export class NavbarNewComponent implements OnInit {
  aboutmenus: any;
  mediamenus: any;
  cybermenusL: any;
  outMenu: any;
  phyMenu: any;
  secTechMenu: any;
  secEduMenu: any;
  riskMenu: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.showMenu('nav-toggle', 'nav-menu');
    // this.toggleMenu('nav-menu', 'btn-click');

    this.api.getNavBar().subscribe((data: any) => {
      this.aboutmenus = data.attributes.abouts.data;
      this.mediamenus = data.attributes.media_centres.data;
      this.cybermenusL = data.attributes.cyber_menu_lefts.data;
      this.outMenu = data.attributes.outsourcing_menus.data;
      this.phyMenu = data.attributes.physical_security_menus.data;
      this.secTechMenu = data.attributes.security_technologies_menus.data;
      this.secEduMenu = data.attributes.security_education_menus.data;
      this.riskMenu = data.attributes.security_risk_menus.data;

      // this.getMenuLinks();
    });
  }
  showMenu = (toggleId: string, navId: string) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    toggle?.addEventListener('click', () => {
      // Add show-menu class to nav menu
      nav?.classList.toggle('show-menu');

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon');
    });
  };

  toggleMenu(navId: string, toggleId: string) {
    const nav = document.getElementById(navId),
      toggle = document.getElementById(toggleId);

    // Add show-menu class to nav menu
    nav?.classList.remove('show-menu');
    toggle?.classList.toggle('show-icon');
  }
}
