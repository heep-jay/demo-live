import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { NavbarService } from 'src/app/Service/navbar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name = '';
  homes: any;
  businessSectionHeader: string = '';
  businessSectionSubHeader: string = '';
  reviewHeader: string = '';
  banner: any;
  fybLeft: any;
  fybRight: any;

  headlinesPost: any;
  blognews: any;
  blogPosts: any = [];
  jointPosts: any = [];
  combination: any;
  constructor(private api: ApiService, public navb: NavbarService) {}

  related = 'Related News';
  guides = 'Articles, News & Events';
  boldText = 'Read the latest articles';

  ngOnInit(): void {
    window.scrollTo(0, 0);
    let bbb: any = [];
    this.navb.show();
    this.api.getHomePage().subscribe((data: any) => {
      this.businessSectionHeader = data.attributes.businessSectionHeader;
      this.businessSectionSubHeader = data.attributes.businessSectionSubHeader;
      this.reviewHeader = data.attributes.reviewHeader;
      this.banner = data?.attributes.banners.data;
      this.fybLeft = data.attributes.fyblefts.data;
      this.fybRight = data.attributes.fybrights.data;
    });

    this.api.getNewsandEvents().subscribe((data: any) => {
      this.jointPosts = data.filter(
        (data: any) => data.attributes.headline === true && data.id === 7
      );
      this.blogPosts = data.filter(
        (data: any) => data.attributes.blog === true
      );
      this.blogPosts.pop();
      this.combination = this.jointPosts.concat(this.blogPosts);

      return this.jointPosts, this.blogPosts, this.combination;
    });

    this.api.getBlogPosts().subscribe((data: any) => {
      this.blogPosts = data.attributes.blogposts.data;
      bbb = bbb.concat(this.blogPosts);
      this.blognews = bbb;
      return this.blogPosts, this.blognews;
    });
  }
  halo() {
    window.open('https://halogen-group.com/halosphere/', '_blank');
  }
  redirect(url: string) {
    window.location.href = `https://halogen-group.com/new-website/${url}`;
  }
}
