import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homecarousel',
  templateUrl: './homecarousel.component.html',
  styleUrls: ['./homecarousel.component.css']
})
export class HomecarouselComponent implements OnInit {
  @Input() banner: any;

  constructor() {

  }

  ngOnInit(): void {

    console.log(this.banner)
  }
}
