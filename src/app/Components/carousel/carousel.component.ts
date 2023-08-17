import {
  Component,
  ViewChild,
  ChangeDetectorRef,
  NgIterable,
  OnInit,
  AfterViewInit,
  Input,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

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
export class CarouselComponent implements AfterViewInit {
  @Input() img: any;
  @Input() sub!: string;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // constructor() {}
  clientlogos = client_logos;
  active: boolean = false;
  sections: any;
  navigation: any;

  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  // ngOnInit(): void {}

  @ViewChild('myCarousel') myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
    vertical: {
      enabled: true,
      height: 850,
    },
  };
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
