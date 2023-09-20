import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatedpost',
  templateUrl: './relatedpost.component.html',
  styleUrls: ['./relatedpost.component.css'],
})
export class RelatedpostComponent implements OnInit {
  @Input() rel!: string;
  @Input() guide!: string;
  @Input() bold!: string;
  @Input() combo!: any;

  constructor() {}

  ngOnInit(): void {}
}
