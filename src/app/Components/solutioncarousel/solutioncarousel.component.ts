import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solutioncarousel',
  templateUrl: './solutioncarousel.component.html',
  styleUrls: ['./solutioncarousel.component.css'],
})
export class SolutioncarouselComponent implements OnInit {
  @Input() solution: any;
  constructor() {}

  ngOnInit(): void {}
  // toElem() {
  //   window.location.href = "https://halogen-group.vercel.app/other-security-solutions#elem";
  // }
  // toIdentity() {
  //   window.location.href = "https://halogen-group.vercel.app/other-security-solutions#identity";
  // }
  // toPhysical() {
  //   window.location.href = "https://halogen-group.vercel.app/other-security-solutions#phy";
  // }
  // redirect(text: string, id: string) {
  //   window.location.href = `https://halogen-group.com/new-website/${text}/${id}`
  // }
}
