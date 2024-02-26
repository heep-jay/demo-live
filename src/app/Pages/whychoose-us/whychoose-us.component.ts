import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-whychoose-us',
  templateUrl: './whychoose-us.component.html',
  styleUrls: ['./whychoose-us.component.css'],
})
export class WhychooseUsComponent implements OnInit {
  mainHeader: string = '';
  whyHeader: string = '';
  solutionHeader: string = '';
  contactHeader: string = '';
  faqHeader: string = '';
  mainBody1: string = '';
  mainBody2: string = '';
  solutionBody: string = '';
  contactBody: string = '';
  faqs: any;
  solutions: any;
  reasons: any;
  constructor(private api: ApiService, private titleService: Title) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    const pageTitle = 'Halogen | Why Halogen';
    this.setPageTitle(pageTitle);
    this.api.getWhyHalogenPage().subscribe((data) => {
      this.mainHeader = data.attributes.mainHeader;
      this.whyHeader = data.attributes.whyHeader;
      this.solutionHeader = data.attributes.solutionHeader;
      this.contactHeader = data.attributes.contactHeader;
      this.faqHeader = data.attributes.faqHeader;
      this.mainBody1 = data.attributes.mainBody1;
      this.mainBody2 = data.attributes.mainBody2;
      this.solutionBody = data.attributes.solutionBody;
      this.contactBody = data.attributes.contactBody;
      this.faqs = data.attributes.faqs.data;
      this.reasons = data.attributes.why_uses.data;
      this.solutions = data.attributes.solution_carousels.data;
    });
  }
  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
