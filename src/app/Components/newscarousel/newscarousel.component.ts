import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newscarousel',
  templateUrl: './newscarousel.component.html',
  styleUrls: ['./newscarousel.component.css']
})
export class NewscarouselComponent implements OnInit {
  @Input() headlinePost: any
  constructor() { }

  ngOnInit(): void {
  }

}
