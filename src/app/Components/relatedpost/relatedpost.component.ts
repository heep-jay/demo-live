import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatedpost',
  templateUrl: './relatedpost.component.html',
  styleUrls: ['./relatedpost.component.css'],
})
export class RelatedpostComponent implements OnInit {
  @Input() rel!: string;
  @Input() guide!: string;
  @Input() bold!: string;
  @Input() combo!: any;

  posts = [
    {
      id: 1,
      title: 'Halogen partners FG on Cyber Security Training.',
      smallText:
        'THE OPEN WORLD OF OPPORTUNITIES AND THREATS...WHERE LIES SAFETY?',
      image: '/assets/images/1.png',
    },
    {
      id: 2,
      title: 'Nigeria needs a national emergency response policy.',
      smallText:
        'A lot of companies did not envision that the Covid-19 lockdown was going to last this long and some of their sites were not properly guarded.',
      image: '/assets/images/2.png',
    },
    {
      id: 3,
      title: 'Technology-driven Business Process is the new normal.',
      smallText:
        'The socio-economic disruptions caused by the Coronavirus pandemic have triggered a paradigm shift in security risk management,',
      image: '/assets/images/3.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
