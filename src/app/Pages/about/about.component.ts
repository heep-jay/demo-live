import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  header1: string = ""
  header2: string = ""
  body1: string = ""
  body2: string = ""
  body3: string = ""
  ourMission: string = ""
  ourValues: string = ""
  ourVision: string = ""
  mainImage: any;
  leaders: any;
  leaderTitle: string = "";
  leaderBody: string = "";
  // leaders: any = [{
  //   image: "/assets/images/wale.jpg",
  //   name: "Wale Olaoye",
  //   title: "Group Managing Director ",
  // }, {
  //   image: "/assets/images/bosun.jpg",
  //   name: "Bosun Sosanya",
  //   title: "Executive Director, Physical Security Solutions ",
  // }, {
  //   image: "/assets/images/kola.jpg",
  //   name: "Kolawole Idowu",
  //   title: "Executive Director, Finance & Cooperate Services",
  // }, {
  //   image: "/assets/images/adebowale.jpg",
  //   name: "Dr. Adebowale Adeagbo",
  //   title: "Chief Operating Officer Academy Halogen",
  // }, {
  //   image: "/assets/images/adedayo.jpg",
  //   name: "Adedayo Abegunde",
  //   title: "Director Virtual Technology & New Markets",
  // }, {
  //   image: "/assets/images/david.jpg",
  //   name: "Adebola David",
  //   title: "Group Head, Human Capital",
  // }, {
  //   image: "/assets/images/adebola.jpg",
  //   name: "Omotayo Ken Suleiman",
  //   title: "Director Cooperate Communications & Branding ",
  // }, {
  //   image: "/assets/images/omotayo.jpg",
  //   name: "Omoshola Yusuf",
  //   title: "Chief Technology Officer",
  // }, {
  //   image: "/assets/images/regina.jpg",
  //   name: "Regina Rex Eleazu-Uriri ( RTD)",
  //   title: "Head, Cadets Academy",
  // }, {
  //   image: "/assets/images/yusuf.png",
  //   name: "Isoken Olagunju",
  //   title: "Head, Compliance",
  // }, {
  //   image: "/assets/images/oluwa.png",
  //   name: "Oluwaseun Adesanya",
  //   title: "Group Head, Cooperate Strategy",
  // }]
  constructor(private api: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.api.getAboutPage().subscribe((data) => {

      this.body1 = data.attributes.aboutBody1
      this.body2 = data.attributes.aboutBody2
      this.body3 = data.attributes.aboutBody3
      this.header1 = data.attributes.aboutHeader1
      this.header2 = data.attributes.aboutHeader2
      this.leaderBody = data.attributes.leadersBody1
      this.leaderTitle = data.attributes.leadersTitle
      this.ourMission = data.attributes.ourMission
      this.ourValues = data.attributes.ourValues
      this.ourVision = data.attributes.ourVision

      this.leaders = data.attributes.management_teams.data
    })

    this.api.getAboutPageImage().subscribe((data) => {
      this.mainImage = data.attributes.aboutImage.data.attributes.url
    })
  }

}
