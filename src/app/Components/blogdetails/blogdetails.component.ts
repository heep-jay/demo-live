import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { ApiService } from 'src/app/Service/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css'],
})
export class BlogdetailsComponent implements OnInit {
  postId: string | number | null = null;
  mainImage: string = '';
  content: any;
  author: string = '';
  title: string = '';
  createdAt: any;
  related = 'Related News';

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.postId = this.route.snapshot.paramMap.get('id');

    this.api.getOneBlogPost(this.postId).subscribe((data: any) => {
      this.title = data.attributes.title;
      this.author = data.attributes.author.data.attributes.name;
      this.content = data.attributes.content;
      this.createdAt = data.attributes.createdAt;
      this.mainImage = data.attributes.mainImage.data.attributes.url;

      document.getElementById('mark-content')!.innerHTML = marked.parse(
        this.content
      );
    });
  }
  back() {
    this._location.back();
  }
}
