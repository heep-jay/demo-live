import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newnav',
  templateUrl: './newnav.component.html',
  styleUrls: ['./newnav.component.css'],
})
export class NewnavComponent implements OnInit {
  @Input() cybermenusL: any;
  @Input() outMenu: any;
  @Input() phyMenu: any;
  @Input() secTechMenu: any;
  @Input() secEduMenu: any;
  @Input() riskMenu: any;
  @Input() defenseMenu: any;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.menus = this.cybermenusL;
  }
  menus: any = [];
  items: string[] = [
    'Cyber security service',
    'Security Technologies/ IOT',
    'Physical security & Mobility',
    'Identity risk solutions & outsourcing',
    'Security education',
    'Security risk advisory & consultancy',
    // 'Defence industries contracting & support services',
    'Services',
  ];
  subItems: string[] = [
    'Cyber security service',
    'Security Technologies/ IOT',
    'Physical security & Mobility',
    'Identity risk solutions & outsourcing',
    'Security education',
    'Security risk advisory & consultancy',
    'Defence industries contracting & support services',
  ];

  // Variable to track the active item
  activeItem: string = this.items[0];

  // Function to set the active item
  setActiveItem(item: string): void {
    this.activeItem = item;

    switch (item) {
      case 'Security Technologies/ IOT':
        this.menus = this.secTechMenu;
        break;
      case 'Physical security & Mobility':
        this.menus = this.phyMenu;
        break;
      case 'Identity risk solutions & outsourcing':
        this.menus = this.outMenu;
        break;
      case 'Security education':
        this.menus = this.secEduMenu;
        break;
      case 'Security risk advisory & consultancy':
        this.menus = this.riskMenu;
        break;
      // case 'Defence industries contracting & support services':
      //   this.menus = this.defenseMenu;
      //   break;
      case 'Festive Services':
        this.menus = [
          {
            attributes: {
              url: 'services',
              name: 'Festive Services',
              icon: 'settings',
            },
          },
        ];
        break;

      default:
        this.menus = this.cybermenusL;
    }
  }
  toggleMenu() {
    this.btnClick.emit();
  }
}
