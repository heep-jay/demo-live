import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vposts',
  templateUrl: './vposts.component.html',
  styleUrls: ['./vposts.component.css']
})
export class VpostsComponent implements OnInit {
  @Input() post!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
