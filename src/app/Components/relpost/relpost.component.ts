import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-relpost',
  templateUrl: './relpost.component.html',
  styleUrls: ['./relpost.component.css'],
})
export class RelpostComponent implements OnInit {
  postId: any;
  url: string = '';
  @Input() post!: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.postId = this.route.snapshot.paramMap.get('id');
    this.postId = this.router.url;
    console.log(this.postId);

    if (this.postId.includes('halodigest')) {
      this.url = 'halodigest';
    } else {
      this.url = 'news-events/news';
    }
  }

  btnClick(id: any) {
    window.scrollTo(0, 0);
    if (
      this.postId.includes('halodigest') ||
      !this.post.attributes.post_category
    ) {
      this.url = '/halodigest';
    } else if (this.post.attributes.blog === true) {
      this.url = '/news-events/blogpost';
    } else {
      this.url = '/news-events/news';
    }
    this.router.navigateByUrl(`/${this.url}/${id}`);
  }
}
