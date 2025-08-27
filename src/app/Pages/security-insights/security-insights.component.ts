import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-insights',
  templateUrl: './security-insights.component.html',
  styleUrls: ['./security-insights.component.css'],
})
export class SecurityInsightsComponent implements OnInit {
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.canonicalUrl();
    window.scrollTo(0, 0);
    const pageTitle = 'Halogen | Security Insights';
    // Generate your dynamic title here
    this.setPageTitle(pageTitle);
  }
  download(url: any) {
    window.open(url, '_blank');
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
