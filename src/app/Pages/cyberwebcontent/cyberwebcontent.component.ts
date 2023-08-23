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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
interface Logos {
  image: string;
  caption: string;
}

const client_logos: Logos[] = [
  {
    image: '/assets/images/cyberpartners.png',
    caption: 'Halogen Cyber Partners',
  },
  {
    image: '/assets/images/cyberclient.png',
    caption: 'Halogen Cyber Clients',
  },
  {
    image: '/assets/images/cyberclient1.png',
    caption: 'Halogen Cyber Clients',
  },
];
@Component({
  selector: 'app-cyberwebcontent',
  templateUrl: './cyberwebcontent.component.html',
  styleUrls: ['./cyberwebcontent.component.css'],
})
export class CyberwebcontentComponent implements OnInit {
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
  };
  constructor(
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private el: ElementRef
  ) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        console.log(`${result}`);
      });
  }

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
}
