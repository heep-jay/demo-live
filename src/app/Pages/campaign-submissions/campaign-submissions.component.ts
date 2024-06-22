import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignServiceService } from 'src/app/Service/campaign-service.service';
export interface TableData {
  [key: string]: any;
}

@Component({
  selector: 'app-campaign-submissions',
  templateUrl: './campaign-submissions.component.html',
  styleUrls: ['./campaign-submissions.component.css'],
})
export class CampaignSubmissionsComponent implements OnInit {
  id: string = '';
  data: any = [];
  tableData: TableData[] = [];
  displayedColumns: string[] = [];
  excludedColumns: string[] = ['privacy', 'campaign'];
  formData: any = [];
  formTitle: string = '';

  constructor(
    private api: CampaignServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.api.getSubmissions(this.id).subscribe((data) => {
      console.log(data);
      this.tableData = this.preprocessTableData(data?.data);
      this.formTitle =
        data?.data[0]?.attributes?.campaign_form?.data?.attributes.title;
      console.log(this.formTitle);
      data?.data.forEach((data: any) => {
        this.formData.push(data?.attributes?.formData);
      });
      this.displayedColumns = this.getColumns(data?.data);
      console.log(this.displayedColumns);
    });
  }

  preprocessTableData(data: any) {
    return data.map((row: any) => {
      console.log('formData', row);
      const processedRow: TableData = {};
      Object.keys(row?.attributes?.formData).forEach((key) => {
        if (
          typeof row?.attributes?.formData[key] === 'object' &&
          row?.attributes?.formData[key] !== null
        ) {
          processedRow[key] = this.convertObjectToString(
            row?.attributes?.formData[key]
          );
        } else {
          processedRow[key] = row?.attributes?.formData[key];
          // console.log(processedRow[key]);
        }
      });
      return processedRow;
    });
  }

  convertObjectToString(obj: { [key: string]: boolean }): string {
    return Object.keys(obj)
      .filter((key) => obj[key])
      .join(', ');
  }

  getColumns(data: any) {
    const columns = new Set<string>();
    data.forEach((row: any) => {
      Object.keys(row.attributes.formData).forEach((key) => {
        if (!this.excludedColumns.includes(key)) {
          columns.add(key);
        }
      });
    });
    return Array.from(columns);
  }

  getTrueHobbies(hobbies: { [key: string]: boolean }): string {
    return Object.keys(hobbies)
      .filter((hobby) => hobbies[hobby])
      .join(', ');
  }

  exportTable() {
    this.api.exportTableToXLSX(
      this.formData,
      this.excludedColumns,
      'TableData'
    );
  }
}
