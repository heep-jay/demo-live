import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-national-security',
  templateUrl: './national-security.component.html',
  styleUrls: ['./national-security.component.css'],
})
export class NationalSecurityComponent implements OnInit {
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.canonicalUrl();
    window.scrollTo(0, 0);
    const pageTitle = 'Halogen | Nigerias Security Outlook 2024';
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
