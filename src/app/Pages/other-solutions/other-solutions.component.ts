import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-other-solutions',
  templateUrl: './other-solutions.component.html',
  styleUrls: ['./other-solutions.component.css'],
})
export class OtherSolutionsComponent implements OnInit {
  closeResult: string = '';
  risks: any;
  productName: string = '';
  productHeader: string = '';
  mainImage: any;
  productBody1: any;
  productBody2: any;
  productBody3: any;
  productBody4: any;
  banners: any;
  products: any;
  pImage: any;
  services: string[] = [];
  constructor(
    private modalService: NgbModal,
    private api: ApiService,
    private router: Router
  ) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.canonicalUrl();
    this.api.getProductPage(3).subscribe((data) => {
      this.risks = data;
      this.productName = data.attributes.productName;
      this.productHeader = data.attributes.productHeader;
      this.productHeader = data.attributes.productHeader;
      this.banners = data.attributes.product_banners.data;
      this.products = data.attributes.products.data;
      this.products.map((data: any) =>
        this.services.push(data.attributes.productName)
      );
    });

    this.api.getProductImage(3).subscribe((data) => {
      this.mainImage = data.attributes.productMainImage.data.attributes.url;
    });
  }
  toSuv() {
    document.getElementById('suv')?.scrollIntoView({ behavior: 'smooth' });
  }
  toPhysical() {
    document.getElementById('phy')?.scrollIntoView({ behavior: 'smooth' });
  }
  toTravel() {
    document.getElementById('travel')?.scrollIntoView({ behavior: 'smooth' });
  }
  toMobility() {
    document.getElementById('mobility')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrolll(data: any) {
    document.getElementById(data)?.scrollIntoView({ behavior: 'smooth' });
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
}
