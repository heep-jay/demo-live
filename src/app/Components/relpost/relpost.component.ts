import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relpost',
  templateUrl: './relpost.component.html',
  styleUrls: ['./relpost.component.css'],
})
export class RelpostComponent implements OnInit {
  @Input() post!: any;

  constructor() {}

  ngOnInit(): void {}
}
