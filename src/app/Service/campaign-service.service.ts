import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CampaignServiceService {
  private apiUrl1 = 'https://halogen-live.onrender.com';
  // private apiUrl1 = 'http://localhost:1337'; // Strapi API URL

  constructor(private http: HttpClient) {}

  getForm(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl1}/api/campaign-forms/${id}?populate=*`);
  }

  submitForm(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl1}/api/campaign-sumissions`, data);
  }

  getSubmissions(id: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl1}/api/campaign-sumissions?filters[campaign_form][id][$eq]=${id}&pagination[limit]=1000&populate=*`
    );
    //http://localhost:1337/api/campaign-sumissions?populate[campaign_form][fields][0]=id
  }

  exportTableToXLSX(
    tableData: any[],
    excludedColumns: string[],
    filename: string
  ): void {
    const processedData = this.processTableData(tableData, excludedColumns);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(processedData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout: ArrayBuffer = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });

    saveAs(
      new Blob([wbout], { type: 'application/octet-stream' }),
      `${filename}.xlsx`
    );
  }

  private processTableData(data: any[], excludedColumns: string[]): any[] {
    return data.map((row) => {
      const processedRow: any = {};
      Object.keys(row).forEach((key) => {
        if (!excludedColumns.includes(key)) {
          if (typeof row[key] === 'object' && row[key] !== null) {
            processedRow[key] = this.processObjectColumn(row[key]);
          } else {
            processedRow[key] = row[key];
          }
        }
      });
      return processedRow;
    });
  }

  private processObjectColumn(obj: { [key: string]: any }): string {
    return Object.keys(obj)
      .filter((key) => obj[key] === true)
      .join(', ');
  }
}
