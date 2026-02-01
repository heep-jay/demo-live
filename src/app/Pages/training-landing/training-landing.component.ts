import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-training-landing',
  templateUrl: './training-landing.component.html',
  styleUrls: ['./training-landing.component.css'],
})
export class TrainingLandingComponent implements OnInit {
  @ViewChild('trainingFormSection') trainingFormSection!: ElementRef;

  featuredPrograms = [
    {
      title: 'HEAT Training',
      description:
        'Survival skills and situational awareness for high-risk environments',
      icon: 'fas fa-fire',
      duration: '2 Days',
      level: 'Advanced',
    },
    {
      title: 'Close Protection',
      description: 'Professional protective operations and executive security',
      icon: 'fas fa-user-shield',
      duration: '3 Days',
      level: 'Expert',
    },
    {
      title: 'Crisis Management',
      description: 'Command, control, and coordination during emergencies',
      icon: 'fas fa-exclamation-triangle',
      duration: '2 Days',
      level: 'Advanced',
    },
    {
      title: 'Defensive Driving',
      description: 'Vehicle-based threat avoidance and protective driving',
      icon: 'fas fa-car',
      duration: '2 Days',
      level: 'Intermediate',
    },
    {
      title: 'Security Intelligence',
      description: 'Investigation techniques and analytical reporting',
      icon: 'fas fa-search',
      duration: '2 Days',
      level: 'Intermediate',
    },
    {
      title: 'Risk Assessment',
      description: 'Threat analysis and mitigation planning',
      icon: 'fas fa-chart-pie',
      duration: '2 Days',
      level: 'Advanced',
    },
  ];

  benefits = [
    {
      title: 'Practical Application',
      description: 'Real-world scenarios and hands-on exercises',
    },
    {
      title: 'Certified Instructors',
      description: 'Industry veterans with extensive field experience',
    },
    {
      title: 'Customized Content',
      description: 'Tailored programs to match your specific needs',
    },
    {
      title: 'Flexible Delivery',
      description: 'On-site, virtual, or hybrid training options',
    },
  ];

  testimonials = [
    {
      text: "The HEAT training transformed our team's approach to high-risk environments. The practical exercises were invaluable.",
      name: 'Michael Rodriguez',
      position: 'Security Director, Global Corp',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      text: "Professional, thorough, and highly effective. Our close protection team's skills improved dramatically.",
      name: 'Sarah Johnson',
      position: 'Head of Security, Financial Institution',
      avatar: 'https://i.pravatar.cc/150?img=5',
    },
    {
      text: 'The crisis management training gave us confidence and clear protocols for emergency situations.',
      name: 'David Chen',
      position: 'Operations Manager, Tech Company',
      avatar: 'https://i.pravatar.cc/150?img=8',
    },
  ];

  faqs = [
    {
      question:
        'What is the minimum number of participants for group training?',
      answer:
        'We require a minimum of 5 participants for group training sessions. For smaller groups, we recommend our scheduled public sessions.',
      open: false,
    },
    {
      question: 'Can training be conducted at our premises?',
      answer:
        'Yes, we offer on-site training worldwide. Our team will bring all necessary equipment and materials to your location.',
      open: false,
    },
    {
      question: 'Are the training programs certified?',
      answer:
        'All our programs are certified and accredited by relevant security authorities. Participants receive certificates upon completion.',
      open: false,
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept bank transfers, credit cards, and corporate invoicing. Payment terms can be arranged based on your organizational requirements.',
      open: false,
    },
    {
      question: 'Can training content be customized?',
      answer:
        'Absolutely. We work closely with clients to tailor content, scenarios, and exercises to match specific organizational needs and threats.',
      open: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialize any required data
  }

  scrollToForm(): void {
    if (this.trainingFormSection) {
      this.trainingFormSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
