import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-minipost',
  templateUrl: './minipost.component.html',
  styleUrls: ['./minipost.component.css']
})
export class MinipostComponent implements OnInit {
  @Input() post: any;
  constructor() { }

  ngOnInit(): void {
  }

}
