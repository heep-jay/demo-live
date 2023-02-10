import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/Service/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent implements OnInit {
  id = ''
  closeResult: string = "";
  risks: any;
  productName: string = "";
  productHeader: string = "";
  mainImage: any;
  productBody1: any;
  productBody2: any;
  productBody3: any;
  productBody4: any;
  banners: any;
  products: any;
  pImage: any;
  services: string[] = [];
  prodId: string | number | null | any = null


  constructor(private modalService: NgbModal, private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.api.getProductPage(1).subscribe((data) => {
      this.risks = data;
      this.productName = data.attributes.productName
      this.productHeader = data.attributes.productHeader
      this.productHeader = data.attributes.productHeader
      this.productBody1 = data.attributes.productBody1
      this.productBody2 = data.attributes.productBody2
      this.productBody3 = data.attributes.productBody3
      this.productBody4 = data.attributes.productBody4
      this.banners = data.attributes.product_banners.data
      this.products = data.attributes.products.data
      this.products.map((data: any) => (
        this.services.push(data.attributes.productName)
      ))
      // this.getProductImg()
    })

    this.api.getProductImage(1).subscribe((data) => {

      this.mainImage = data.attributes.productMainImage.data.attributes.url
    })
    this.doSomething()


  }
  // ngAfterViewInit() {
  //   if (window.location.hash) {
  //     this.api.getProductPage(1).subscribe(async (data) => {
  //       await data
  //       let hash = window.location.hash.slice(1)
  //       var element = document.getElementById(hash);
  //       var headerOffset = 145;
  //       var elementPosition = element!.getBoundingClientRect().top;
  //       var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  //       // document.getElementById(hash)?.
  //       window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  //     })

  //   }
  // }

  doSomething() {
    this.prodId = this.route.snapshot
      .paramMap.get('id');
    if (this.prodId) {
      this.api.getProductPage(1).subscribe(async (data) => {
        await data
        console.log(this.prodId)
        // let hash = this.prodId
        var element = document.getElementById(this.prodId)?.getBoundingClientRect().top
        var headerOffset = 145;
        // var elementPosition = element!.getBoundingClientRect().top;
        var offsetPosition = element! + window.pageYOffset - headerOffset;
        // document.getElementById(hash)?.
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      })

    }
  }

  // getProductImg() {
  //   this.products.map((data: any) => {
  //     console.log(data)
  //     data.attributes.productImage.data.attributes.url = `http://localhost:1337${data.attributes.productImage.data.attributes.url}`
  //     return this.products
  //   })
  // }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },

    );
  }
  scrolll(data: any) {
    console.log(data)
    var element = document.getElementById(data)?.getBoundingClientRect().top
    var headerOffset = 145;
    var offsetPosition = element! + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }

}
