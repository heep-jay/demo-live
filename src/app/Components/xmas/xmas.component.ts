import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xmas',
  templateUrl: './xmas.component.html',
  styleUrls: ['./xmas.component.css'],
})
export class XmasComponent implements OnInit {
  isOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  onClose() {
    this.isOpen = false;
  }
}
