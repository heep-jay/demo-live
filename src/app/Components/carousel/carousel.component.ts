import { Component, OnInit, Input } from '@angular/core';

interface Logos {
  image: string;
  caption: string;
}
const client_logos: Logos[] = [
  {
    image: '/assets/images/clientlogo.jpg',
    caption: '',
  },
  {
    image: '/assets/images/clientlogo1.jpg',
    caption: '',
  },
  {
    image: '/assets/images/clientlogo2.jpg',
    caption: '',
  },
  {
    image: '/assets/images/clientlogo3.jpg',
    caption: '',
  },
  {
    image: '/assets/images/clientlogo4.jpg',
    caption: '',
  },
  {
    image: '/assets/images/clientlogo5.jpg',
    caption: '',
  },
  {
    image: '/assets/images/clientlogo6.jpg',
    caption: '',
  },
  {
    image: '/assets/images/clientlogo7.jpg',
    caption: '',
  },
];

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() img: any;
  @Input() sub!: string;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() {}
  clientlogos = client_logos;
  active: boolean = false;
  ngOnInit(): void {}
}
