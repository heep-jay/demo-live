import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css'],
})
export class HeroCarouselComponent implements OnInit {
  @Input() banner: any;
  constructor() {}

  ngOnInit(): void {}
}
