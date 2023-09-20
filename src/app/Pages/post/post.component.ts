import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  related = 'Related News';
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
