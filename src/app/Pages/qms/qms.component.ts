import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-qms',
  templateUrl: './qms.component.html',
  styleUrls: ['./qms.component.css'],
})
export class QmsComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const pageTitle = 'Halogen | Quality Policy Statement';
    this.setPageTitle(pageTitle);
  }

  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
