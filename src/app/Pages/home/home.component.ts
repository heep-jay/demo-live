import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = ""
  homes: any;
  businessSectionHeader: string = "";
  businessSectionSubHeader: string = "";
  reviewHeader: string = "";
  banner: any;
  fybLeft: any;
  fybRight: any;
  constructor(private api: ApiService) { }

  related = "Related News";
  guides = "GUIDES & NEWS";
  boldText = "Read the latest articles";

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.api.getHomePage().subscribe((data: any) => {
      // this.homes = data.attributes
      // // this.name = data.name
      this.businessSectionHeader = data.attributes.businessSectionHeader;
      this.businessSectionSubHeader = data.attributes.businessSectionSubHeader;
      this.reviewHeader = data.attributes.reviewHeader
      this.banner = data?.attributes.banners.data

      this.fybLeft = data.attributes.fyblefts.data
      this.fybRight = data.attributes.fybrights.data
      console.log(this.banner)
      // this.getBanners()
    })
  }
  halo() {
    window.open('https://halogen-group.com/halosphere/', '_blank');
  }
  redirect(url: string) {
    window.location.href = `https://halogen-group.com/new-website/${url}`
  }
}
