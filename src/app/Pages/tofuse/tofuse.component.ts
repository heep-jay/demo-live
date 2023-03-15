import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tofuse',
  templateUrl: './tofuse.component.html',
  styleUrls: ['./tofuse.component.css']
})
export class TofuseComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  scrolll(data: any) {
    console.log(data)
    var element = document.getElementById(data)?.getBoundingClientRect().top
    var headerOffset = 145;
    var offsetPosition = element! + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
  print() {
    window.print();
  }
}
