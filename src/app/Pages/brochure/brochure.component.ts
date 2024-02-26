import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.css'],
})
export class BrochureComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const pageTitle = 'Halogen | Brochure';
    // Generate your dynamic title here
    this.setPageTitle(pageTitle);
  }
  download(url: any) {
    window.open(url, '_blank');
  }

  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
