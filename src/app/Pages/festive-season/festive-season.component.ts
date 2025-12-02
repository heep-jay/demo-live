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
      title: 'Secured Movements',
      text: 'Move with confidence. Our secure mobility service combines tactical protection, route risk mapping, and live tracking to keep you safe on every mile; whether for inter-state or intra-state travel, executives, families, ministers, or faith groups. Your journey is secured with us!',
    },
    {
      icon: 'assets/images/base2.png',
      title: 'Driver',
      text: 'Travel safely with our professional, security-trained drivers. Enjoy smooth, stress-free journeys as we protect every mile. Your ride is fully secured!',
    },
    {
      icon: '/assets/images/base3.png',
      title: 'Event Security',
      text: 'Enjoy your event with complete peace of mind. Our expert security team manages access, crowds, and backstage areas for concerts, praise nights, corporate, and faith gatherings. You focus on the experience, we take care of the protection.',
    },
  ];

  activities = [
    {
      title: 'Plan Your Journey, Travel Smart',
      content:
        'Check routes, avoid high-risk areas, and travel during daylight whenever possible.',
      color: 'rgba(255, 194, 14, 1)',
    },
    {
      title: 'Stay Vigilant on the Road',
      content:
        'Buckle up, avoid distractions, and follow traffic rules - safety is in every careful move.',
      color: 'rgba(28, 43, 102, 1)',
    },
    {
      title: 'Secure Your Home and Belongings',
      content:
        'Lock your doors and windows, activate your home security devices/alarms, and let trusted neighbors know if you’ll be away.',
      color: 'rgba(255, 194, 14, 1)',
    },
    {
      title: 'Be Alert in Crowds',
      content:
        'Keep your valuables close to you, move in groups or with people you know, and identify emergency exits at events and gatherings',
      color: 'rgba(28, 43, 102, 1)',
    },
    {
      title: 'Keep Emergency Contacts Handy',
      content:
        'Save numbers for local police, medical services, and roadside assistance - be ready for the unexpected.',
      color: 'rgba(255, 194, 14, 1)',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
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

  scrollToContact() {
    document.getElementById('contactss-section')?.scrollIntoView({
      behavior: 'smooth',
    });
  }
  scrollToOfferings() {
    document.getElementById('offerings')?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
