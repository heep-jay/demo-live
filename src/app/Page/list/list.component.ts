import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/Service/Models/homepage';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  name = ""
  homes: any;
  banner: any;
  fyb: any;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {

    this.api.getHomePage().subscribe((data: any) => {
      // this.homes = data.attributes
      // // this.name = data.name
      this.banner = data?.attributes.banners.data
      // this.fyb = data.attributes.fybs
      console.log(this.banner)
      // console.log(this.fyb)
      this.getBanners()
    })


  }
  getBanners() {
    this.banner.map((data: any) => {
      data.attributes.bannerImage.data[0].attributes.url = `http://localhost:1337${data.attributes?.bannerImage?.data[0].attributes.url}`
      console.log(data.attributes.bannerImage.data[0].attributes.url)
      return this.banner
    })
  }

}


