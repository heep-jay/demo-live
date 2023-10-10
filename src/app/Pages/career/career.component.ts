import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
})
export class CareerComponent implements OnInit {
  reports: any;
  image: any;
  pdf: any;
  newreport: any = [];
  current_page: number = 1;
  constructor(private api: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getCareerReports(this.current_page);
  }

  download(url: any) {
    window.open(url, '_blank');
  }
  getCareerReports(current_page: number) {
    this.api.getCareerReports(current_page).subscribe((data: any) => {
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
