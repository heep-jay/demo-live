import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-security-reports',
  templateUrl: './security-reports.component.html',
  styleUrls: ['./security-reports.component.css'],
})
export class SecurityReportsComponent implements OnInit {
  reports: any;
  image: any;
  pdf: any;
  newreport: any = [];
  current_page: number = 1;
  constructor(
    private api: ApiService,
    private cdr: ChangeDetectorRef,
    private titleService: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReports(this.current_page);
    this.canonicalUrl();
    const pageTitle = 'Halogen | Security Reports';
    this.setPageTitle(pageTitle);
  }
  setPageTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  download(url: any) {
    window.open(url, '_blank');
  }
  canonicalUrl(): string {
    // Get the current route
    const currentRoute = this.router.url;
    // Construct the canonical URL based on the current route
    return `https://halogen-group.com${currentRoute}`;
  }
  next() {
    this.cdr.detectChanges();
    this.current_page++;
    this.getReports(this.current_page);
  }

  getReports(current_page: number) {
    this.api.getReports(current_page).subscribe((data: any) => {
      this.reports = data;
      this.reports.map((data: any) => {
        this.image = data.attributes.file.data.attributes.url;
        const dotIndex = this.image.lastIndexOf('.');
        if (dotIndex === -1) {
          return this.image; // No dot found, return the original string
        }
        // Extract the part of the string before the dot
        const stringWithoutExtension = this.image.substring(0, dotIndex);

        // Concatenate 'pdf' to the part before the dot
        const resultString = stringWithoutExtension + '.pdf';

        this.newreport.push({
          name: data.attributes.name,
          image: data.attributes.image.data.attributes.url,
          file_url: resultString,
        });
      });

      return this.reports;
    });
  }
}
