import { Component, OnInit } from '@angular/core';

interface Logos {
  image: string;
  caption: string;
}

@Component({
  selector: 'app-clientscarourel',
  templateUrl: './clientscarourel.component.html',
  styleUrls: ['./clientscarourel.component.css'],
})
export class ClientscarourelComponent implements OnInit {
  responsiveOptions: any[] = [];

  client_logos: Logos[] = [
    {
      image: '/assets/images/total.png',
      caption: 'Halogen Regular Clients',
    },
    {
      image: '/assets/images/firstbank.png',
      caption: 'Halogen Regular Clients',
    },
    {
      image: '/assets/images/hb.png',
      caption: 'Halogen Regular Clients',
    },
    {
      image: '/assets/images/polaris.png',
      caption: 'Halogen Regular Clients',
    },
    {
      image: '/assets/images/keystone.webp',
      caption: 'Halogen Regular Clients',
    },
  ];
  constructor() {}

  ngOnInit() {
    // this.carService.getCarsSmall().then(cars => {
    //     this.cars = cars
    // });
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
