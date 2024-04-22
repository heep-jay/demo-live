import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tofuse',
  templateUrl: './tofuse.component.html',
  styleUrls: ['./tofuse.component.css'],
})
export class TofuseComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.canonicalUrl();
  }
  scrolll(data: any) {
    var element = document.getElementById(data)?.getBoundingClientRect().top;
    var headerOffset = 145;
    var offsetPosition = element! + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
  print() {
    window.print();
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
}
