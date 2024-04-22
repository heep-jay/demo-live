import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/Service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css'],
})
export class RiskComponent implements OnInit {
  id = '';
  closeResult: string = '';
  risks: any;
  productName: any;
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
  prodId: string | number | null | any = null;

  constructor(
    private modalService: NgbModal,
    private api: ApiService,
    private route: ActivatedRoute,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.canonicalUrl();
    const pageTitle = 'Halogen | Security risk advisory & consultancy';
    this.setPageTitle(pageTitle);

    this.api.getProductPage(1).subscribe((data) => {
      this.risks = data;
      this.productName = data.attributes.productName.toLowerCase();
      this.productHeader = data.attributes.productHeader.toLowerCase();
      this.productBody1 = data.attributes.productBody1;
      this.productBody2 = data.attributes.productBody2;
      this.productBody3 = data.attributes.productBody3;
      this.productBody4 = data.attributes.productBody4;
      this.banners = data.attributes.product_banners.data;
      this.products = data.attributes.products.data;
      this.products.map((data: any) =>
        this.services.push(data.attributes.productName)
      );
    });

    this.api.getProductImage(1).subscribe((data) => {
      this.mainImage = data.attributes.productMainImage.data.attributes.url;
    });
    this.doSomething();
  }
  doSomething() {
    this.prodId = this.route.snapshot.paramMap.get('id');
    if (this.prodId) {
      this.api.getProductPage(1).subscribe(async (data) => {
        await data;
        var element = document
          .getElementById(this.prodId)
          ?.getBoundingClientRect().top;
        var headerOffset = 145;
        var offsetPosition = element! + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      });
    }
  }
  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }
  scrolll(data: any) {
    var element = document.getElementById(data)?.getBoundingClientRect().top;
    var headerOffset = 145;
    var offsetPosition = element! + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}
