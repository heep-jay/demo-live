import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-relatedpost',
  templateUrl: './relatedpost.component.html',
  styleUrls: ['./relatedpost.component.css']
})
export class RelatedpostComponent implements OnInit {
  @Input() rel!: string;
  @Input() guide!: string;
  @Input() bold!: string;
  posts = [{
    id: 1,
    title: "Halogen partners FG on Cyber Security Training.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/1.png",
  },
  {
    id: 2,
    title: "Nigeria needs a national emergency response policy.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/2.png",
  },
  {
    id: 3,
    title: "Technology-driven Business Process is the new normal.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/3.png",
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
