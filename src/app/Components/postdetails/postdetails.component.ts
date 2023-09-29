import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { ApiService } from 'src/app/Service/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css'],
})
export class PostdetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private _location: Location
  ) {}
  postId: string | number | null = null;
  mainImage: string = '';
  content: any;
  author: string = '';
  title: string = '';
  createdAt: any;
  related = 'Related News';

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.postId = this.route.snapshot.paramMap.get('id');
    console.log(this.postId);

    this.api.getOneNewsPost(this.postId).subscribe((data: any) => {
      console.log(data);
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
