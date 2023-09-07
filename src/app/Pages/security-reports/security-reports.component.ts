import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getReports(this.current_page);
  }

  download(url: any) {
    console.log(url);
    window.open(url, '_blank');
  }

  next() {
    this.cdr.detectChanges();
    this.current_page++;
    this.getReports(this.current_page);
  }

  getReports(current_page: number) {
    this.api.getReports(current_page).subscribe((data: any) => {
      this.reports = data;
      console.log(this.reports);
      this.reports.map((data: any) => {
        this.image = data.attributes.file.data.attributes.url;
        const dotIndex = this.image.lastIndexOf('.');
        console.log(this.image);
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
