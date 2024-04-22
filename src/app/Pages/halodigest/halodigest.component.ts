import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-halodigest',
  templateUrl: './halodigest.component.html',
  styleUrls: ['./halodigest.component.css'],
})
export class HalodigestComponent implements OnInit {
  posts: any = [];
  constructor(
    private api: ApiService,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.canonicalUrl();
    const pageTitle = 'Halogen | Halodigest';
    this.setPageTitle(pageTitle);

    this.api.getLeadershipPosts().subscribe((data: any) => {
      this.posts = data;
    });
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
