import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { marked } from 'marked';
import { ApiService } from 'src/app/Service/api.service';
import { Location } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css'],
})
export class PostdetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private _location: Location,
    private titleService: Title,
    private metaService: Meta
  ) {}
  postId: string | number | null = null;
  mainImage: string = '';
  content: any;
  author: string = '';
  title: string = '';
  createdAt: any;
  related = '';
  url: any;
  blogPosts: any = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.postId = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((params: any) => {
      this.api.getOneNewsPost(params.id).subscribe((data: any) => {
        this.titleService.setTitle(
          `Halogen | Blogpost - ${data.attributes.title}`
        );

        this.metaService.updateTag({
          name: 'description',
          content: data.attributes.metaDescription,
        });
        this.metaService.updateTag({
          name: 'keywords',
          content: data.attributes.keywords,
        });

        this.metaService.addTag({
          property: 'og:title',
          content: data.attributes.metaTitle,
        });
        this.metaService.addTag({
          property: 'og:description',
          content: data.attributes.metaDescription,
        });

        this.title = data.attributes.title;
        this.author = data.attributes.author.data.attributes.name;
        this.content = data.attributes.content;
        this.createdAt = data.attributes.createdAt;
        this.mainImage = data.attributes.mainImage.data.attributes.url;
        document.getElementById('mark-content')!.innerHTML = marked.parse(
          this.content
        );
      });

      this.api.getNewsandEvents().subscribe((data: any) => {
        const id = this.route.snapshot.paramMap.get('id');
        this.url = this.router.url;

        if (this.url.includes('blogpost')) {
          this.related = 'Related Post';
          this.blogPosts = data.filter(
            (data: any) =>
              data.id !== parseInt(id!) && data.attributes.blog == true
          );

          return this.blogPosts;
        } else return null;
      });
    });
  }

  back() {
    this._location.back();
  }

  btnClick() {}
}
