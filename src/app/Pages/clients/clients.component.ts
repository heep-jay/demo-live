import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  images: any;
  header: string = ""
  header2: string = ""
  subHeader: string = ""
  body: string = ""
  item: any = [];
  isToggle: boolean = false;
  arr: any;
  showMore: string = "show more" || "show less"
  constructor(private api: ApiService) {

  }

  toggle() {
    this.isToggle = !this.isToggle
    console.log(this.isToggle)
    if (this.isToggle) {

      this.arr = this.images
      this.showMore = "show less"
      console.log(this.arr)
    }
    else {

      this.arr = this.images.slice(0, Math.round(this.images.length / 2))
      this.showMore = "show more";
      console.log(this.arr)
    }
  }


  ngOnInit(): void {

    window.scrollTo(0, 0);

    this.api.getClientPage().subscribe((data) => {
      console.log(data)
      this.header = data.attributes.header1
      this.header2 = data.attributes.header2
      this.body = data.attributes.body
      this.subHeader = data.attributes.subHeader
      this.images = data.attributes.client_images.data




      this.arr = this.images.slice(0, Math.round(this.images.length / 2))



    })
  }

}
