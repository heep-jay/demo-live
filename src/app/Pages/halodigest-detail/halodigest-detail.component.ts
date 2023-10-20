import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { ApiService } from 'src/app/Service/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-halodigest-detail',
  templateUrl: './halodigest-detail.component.html',
  styleUrls: ['./halodigest-detail.component.css'],
})
export class HalodigestDetailComponent implements OnInit {
  postId: string | number | null = null;
  mainImage: string = '';
  content: any;
  author: string = '';
  title: string = '';
  createdAt: any;
  related = 'Previous Posts';
  relatedPosts: any = [];
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((params: any) => {
      this.api.getOneHaloPost(params.id).subscribe((data: any) => {
        this.title = data.attributes.title;
        // this.author = data.attributes.author.data.attributes.name;
        this.content = data.attributes.content;
        this.createdAt = data.attributes.createdAt;
        this.mainImage = data.attributes.mainImage.data.attributes.url;

        document.getElementById('mark-content')!.innerHTML = marked.parse(
          this.content
        );
      });
      this.api.getLeadershipPosts().subscribe((data: any) => {
        const id = this.route.snapshot.paramMap.get('id');
        this.relatedPosts = data.filter(
          (data: any) => data.id !== parseInt(id!)
        );
        return this.relatedPosts;
      });
    });
  }

  back() {
    this._location.back();
  }
}
