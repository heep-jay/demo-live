import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-festive-season',
  templateUrl: './festive-season.component.html',
  styleUrls: ['./festive-season.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FestiveSeasonComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  contact: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  offerings = [
    {
      icon: '/assets/images/base2.png',
      title: 'Cyber Security Solutions',
      text: 'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.',
    },
    {
      icon: 'assets/images/base2.png',
      title: 'Electronic Solutions & Telematics',
      text: 'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.',
    },
    {
      icon: '/assets/images/base3.png',
      title: 'Physical Security & Mobility',
      text: 'Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.',
    },
  ];

  activities = [
    {
      title: 'Security Tips for Shoppers',
      content:
        'Practical advice for staying safe while shopping during the festivities.',
      color: 'rgba(60, 152, 204, 1)',
    },
    {
      title: 'Community Watch Program',
      content:
        'Join local community watch programs to keep neighborhoods safe.',
      color: 'rgba(169, 38, 38, 1)',
    },
    {
      title: 'Holiday Cyber Safety',
      content: 'How to avoid online scams and secure your accounts.',
      color: 'rgba(39, 149, 77, 1)',
    },
    {
      title: 'Community Watch Program',
      content:
        'Join local community watch programs to keep neighborhoods safe.',
      color: 'rgba(28, 43, 102, 1)',
    },
    {
      title: 'Holiday Cyber Safety',
      content: 'How to avoid online scams and secure your accounts.',
      color: 'rgba(255, 194, 14, 1)',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  scrollRight() {
    const cardWidth =
      this.carousel.nativeElement.querySelector('.card').offsetWidth + 16;
    this.carousel.nativeElement.scrollLeft += cardWidth;
  }

  scrollLeft() {
    const cardWidth =
      this.carousel.nativeElement.querySelector('.card').offsetWidth + 16;
    this.carousel.nativeElement.scrollLeft -= cardWidth;
  }
  onSubmitContact() {
    // Replace this with real form submission logic
    console.log('Contact submitted', this.contact);
    alert('Thanks, we received your message!');
    this.contact = { name: '', email: '', phone: '', message: '' };
  }
}
