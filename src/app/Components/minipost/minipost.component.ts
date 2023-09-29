import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-minipost',
  templateUrl: './minipost.component.html',
  styleUrls: ['./minipost.component.css'],
})
export class MinipostComponent implements OnInit {
  postId: any;
  url: string = '';
  @Input() post: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.postId = this.router.url;
    console.log(this.postId);

    if (this.postId.includes('halodigest')) {
      this.url = '/halodigest';
    } else {
      this.url = '/news-events/news';
    }
  }
}
