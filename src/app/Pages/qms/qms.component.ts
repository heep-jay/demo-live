import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qms',
  templateUrl: './qms.component.html',
  styleUrls: ['./qms.component.css'],
})
export class QmsComponent implements OnInit {
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.canonicalUrl();
    const pageTitle = 'Halogen | Quality Policy Statement';
    this.setPageTitle(pageTitle);
  }

  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
}
