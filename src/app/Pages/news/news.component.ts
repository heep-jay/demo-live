import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  posts = [
    {
      id: 1,
      type: 'Blog Post',
      title: 'Halogen partners FG on Cyber Security Training.',
      smallText:
        'Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?',
      image: '/assets/images/1.png',
    },
    {
      id: 2,
      type: 'Webinar',
      title: 'Nigeria needs a national emergency response policy.',
      smallText:
        'Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?',
      image: '/assets/images/2.png',
    },
    {
      id: 3,
      type: 'Report',
      title: 'Technology-driven Business Process is the new normal.',
      smallText:
        'Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?',
      image: '/assets/images/3.png',
    },
    {
      id: 4,
      type: 'Webinar',
      title: 'Nigeria needs a national emergency response policy.',
      smallText:
        'Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?',
      image: '/assets/images/2.png',
    },
    {
      id: 4,
      type: 'Webinar',
      title: 'Nigeria needs a national emergency response policy.',
      smallText:
        'Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?',
      image: '/assets/images/2.png',
    },
  ];

  blogs = [
    {
      id: 1,
      type: 'Blog Post',
      title: 'Halogen partners FG on Cyber Security Training.',
      smallText:
        'Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?',
      image: '/assets/images/1.png',
    },
    {
      id: 2,
      type: 'Webinar',
      title: 'Nigeria needs a national emergency response policy.',
      smallText:
        'Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?',
      image: '/assets/images/2.png',
    },
    // {
    //   id: 3,
    //   type: "Report",
    //   title: "Technology-driven Business Process is the new normal.",
    //   smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    //   image: "/assets/images/3.png",
    // }, {
    //   id: 4,
    //   type: "Report",
    //   title: "Technology-driven Business Process is the new normal.",
    //   smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    //   image: "/assets/images/3.png",
    // },
  ];

  headlinesPost: any = [];
  normalPosts: any = [];
  blognews: any;
  blogPosts: any = [];
  jointPosts: any = [];
  combination: any;
  related = 'Related newws';
  guides = 'Guides & news';
  boldText = 'Read the latest articles';
  constructor(private api: ApiService, private titleService: Title) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

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
}
