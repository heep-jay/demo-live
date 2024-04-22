import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/Service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css'],
})
export class CyberSecurityComponent implements OnInit {
  closeResult: string = '';
  risks: any;
  prodP: any;
  productName?: string = '';
  soc: string = 'Security Operations Center (SOC)';
  mssp: string = 'Managed Security Services Provider (MSSP)';
  iot: string = 'IoT Security';
  grc: string = 'Governance, Risk, and Compliance (GRC)';
  cap: string = 'Cybersecurity Awareness Program';
  hcip: string = 'Halogen Cybersecurity Internship Programme';
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
  hash: any;
  mm: any;
  yy: boolean = true;
  prodId: string | number | null | any = null;

  constructor(
    private modalService: NgbModal,
    private api: ApiService,
    private route: ActivatedRoute,
    private titleService: Title,
    private router: Router
  ) {}
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }

  async ngOnInit() {
    window.scrollTo(0, 0);
    this.canonicalUrl();
    const pageTitle = 'Halogen | Cyber security';
    this.setPageTitle(pageTitle);

    this.api.getProductPage(2).subscribe(async (data) => {
      this.risks = data;
      this.productName = await data.attributes.productName;
      this.productHeader = data.attributes.productHeader;
      this.productHeader = data.attributes.productHeader;
      this.productBody1 = data.attributes?.productBody1;
      this.productBody2 = data.attributes?.productBody2;
      this.productBody3 = data.attributes?.productBody3;
      this.productBody4 = data.attributes?.productBody4;
      this.banners = data.attributes.product_banners.data;
      this.products = data.attributes.products.data;
      this.products.map((data: any) => {
        this.services.push(data.attributes.productName);
      });
    });

    this.api.getProductImage(2).subscribe((data) => {
      this.mainImage = data.attributes.productMainImage.data.attributes.url;
    });
  }
  ngAfterViewInit() {
    this.prodId = this.route.snapshot.paramMap.get('id');
    if (this.prodId) {
      this.api.getProductPage(2).subscribe(async (data) => {
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

  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
  scrolll(data: any) {
    var element = document.getElementById(data)?.getBoundingClientRect().top;
    var headerOffset = 145;
    var offsetPosition = element! + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
