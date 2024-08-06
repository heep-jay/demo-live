import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  headlinesPost: any = [];
  normalPosts: any = [];
  p: any;
  blognews: any;
  blogPosts: any = [];
  jointPosts: any = [];
  combination: any;
  related = 'Related newws';
  guides = 'Guides & news';
  boldText = 'Read the latest articles';
  constructor(
    private api: ApiService,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.canonicalUrl();
    const pageTitle = 'Halogen | News & Events';
    this.setPageTitle(pageTitle);

    let bbb: any = [];
    this.api.getNewsandEvents().subscribe((data: any) => {
      this.headlinesPost = data.filter(
        (data: any) => data.attributes.headline === true
      );

      this.jointPosts = data.filter(
        (data: any) => data.attributes.headline === true && data.id === 7
      );
      this.blogPosts = data.filter(
        (data: any) => data.attributes.blog === true
      );
      this.normalPosts = data.filter(
        (data: any) =>
          data.attributes.headline === false && data.attributes.blog === false
      );
      this.combination = this.jointPosts.concat(this.blogPosts);
      console.log(this.blogPosts);
      return (
        this.headlinesPost,
        this.normalPosts,
        this.jointPosts,
        this.blogPosts,
        this.combination
      );
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
