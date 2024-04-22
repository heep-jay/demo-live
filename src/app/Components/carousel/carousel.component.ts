import {
  Component,
  ViewChild,
  ChangeDetectorRef,
  OnInit,
  ElementRef,
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
    caption: 'Halogen Regular Clients',
  },
  {
    image: '/assets/images/clientlogo1.jpg',
    caption: 'Halogen Regular Clients',
  },
  {
    image: '/assets/images/clientlogo2.jpg',
    caption: 'Halogen Regular Clients',
  },
  {
    image: '/assets/images/clientlogo3.jpg',
    caption: 'Halogen Regular Clients',
  },
  {
    image: '/assets/images/clientlogo4.jpg',
    caption: 'Halogen Regular Clients',
  },
  {
    image: '/assets/images/clientlogo5.jpg',
    caption: 'Halogen Regular Clients',
  },
  {
    image: '/assets/images/clientlogo6.jpg',
    caption: 'Halogen Regular Clients',
  },
  {
    image: '/assets/images/clientlogo7.jpg',
    caption: 'Halogen Regular Clients',
  },
  // {
  //   image: '/assets/images/cyberpartners.png',
  //   caption: 'Halogen Cyber Partners',
  // },
  // {
  //   image: '/assets/images/cyberclient.png',
  //   caption: 'Halogen Cyber Clients',
  // },
  // {
  //   image: '/assets/images/cyberclient1.png',
  //   caption: 'Halogen Cyber Clients',
  // },
];

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  @Input() img: any;
  @Input() sub!: string;
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // constructor() {}
  clientlogos = client_logos;
  active: boolean = false;
  sections: any;
  navigation: any;

  hmm!: number;
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  height!: number;

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
      height: this.checkHeight(),
    },
  };

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef) {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide: any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  checkHeight() {
    if (window.matchMedia('(max-width: 500px)').matches) {
      this.height = 400;
    } else {
      this.height = 820;
    }

    return this.height;
  }
}
