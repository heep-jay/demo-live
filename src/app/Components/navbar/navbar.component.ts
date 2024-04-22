import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { NavbarService } from 'src/app/Service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() openMegaMenu = new EventEmitter();
  isToggle: boolean = false;
  isAboutToggle: boolean = false;
  isSolutionToggle: boolean = false;
  isCyberToggle: boolean = false;
  isMediaToggle: boolean = false;
  isphyToggle: boolean = false;
  isOutToggle: boolean = false;
  isEduToggle: boolean = false;
  isRiskToggle: boolean = false;
  aboutUs = '';
  cyberSec = '';
  mediaCentre = '';
  enterHalo = '';
  otherSec = '';
  riskAdv = '';
  nav: any;
  aboutmenus: any;
  mediamenus: any;
  cybermenusL: any;
  outMenu: any;
  phyMenu: any;
  secTechMenu: any;
  secEduMenu: any;
  riskMenu: any;
  defenseMenu: any;

  activeMenu: boolean = false;
  constructor(private api: ApiService, public navb: NavbarService) {}

  ngOnInit(): void {
    this.api.getNavBar().subscribe((data: any) => {
      this.aboutUs = data.attributes.aboutUs;
      this.riskAdv = data.attributes.riskAdv;
      this.cyberSec = data.attributes.cyberSecurity;
      this.mediaCentre = data.attributes.mediaCentre;
      this.otherSec = data.attributes.otherSec;
      this.enterHalo = data.attributes.enterHalo;
      this.aboutmenus = data.attributes.abouts.data;
      this.mediamenus = data.attributes.media_centres.data;
      this.cybermenusL = data.attributes.cyber_menu_lefts.data;
      this.outMenu = data.attributes.outsourcing_menus.data;
      this.phyMenu = data.attributes.physical_security_menus.data;
      this.secTechMenu = data.attributes.security_technologies_menus.data;
      this.secEduMenu = data.attributes.security_education_menus.data;
      this.riskMenu = data.attributes.security_risk_menus.data;
      this.defenseMenu = data.attributes.defense_industries_menus.data;
      this.getMenuLinks();
    });
  }
  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    this.activeMenu = false;
  }

  openMenu($event: any): void {
    $event.stopPropagation();
    this.activeMenu = !this.activeMenu;
  }
  closeNav() {
    this.activeMenu = false;
  }
  getMenuLinks() {
    this.cybermenusL.map((data: any) => {
      data.attributes.url = `/cyber-security/${data.attributes.url}`;
      // data.attributes.url = `https://halogen-group.com/new-website/cyber-security/${data.attributes.url}`
      return this.cybermenusL;
    });
    this.outMenu.map((data: any) => {
      data.attributes.url = `/outsourcing-investigations-identity/${data.attributes.url}`;
      return this.outMenu;
    });
    this.phyMenu.map((data: any) => {
      data.attributes.url = `/physical-security/${data.attributes.url}`;
      return this.phyMenu;
    });
    this.secTechMenu.map((data: any) => {
      data.attributes.url = `/security-technologies/${data.attributes.url}`;
      return this.secTechMenu;
    });
    this.secEduMenu.map((data: any) => {
      data.attributes.url = `/security-seducation/${data.attributes.url}`;
      return this.secEduMenu;
    });
    this.riskMenu.map((data: any) => {
      data.attributes.url = `/risk-advisory-and-consulting/${data.attributes.url}`;
      return this.riskMenu;
    });
    this.defenseMenu.map((data: any) => {
      data.attributes.url = `/defense-industries/${data.attributes.url}`;
      return this.riskMenu;
    });
  }

  redirect(data: any) {
    this.isToggle = false;

    window.location.href = data;
  }
  mediaToggle() {
    this.isMediaToggle = !this.isMediaToggle;
  }
  onToggle() {
    this.isToggle = !this.isToggle;
  }
  aboutToggle() {
    this.isAboutToggle = !this.isAboutToggle;
  }
  solutionToggle() {
    this.isSolutionToggle = !this.isSolutionToggle;
  }
  cyberToggle() {
    this.isCyberToggle = !this.isCyberToggle;
  }
  phyToggle() {
    this.isphyToggle = !this.isphyToggle;
  }
  eduToggle() {
    this.isEduToggle = !this.isEduToggle;
  }
  outMenuToggle() {
    this.isOutToggle = !this.isOutToggle;
  }
  riskToggle() {
    this.isRiskToggle = !this.isRiskToggle;
  }

  halo() {
    window.open('https://halogen-group.com/halosphere/', '_blank');
  }
}
