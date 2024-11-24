import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ApiService } from 'src/app/Service/api.service';
import { SearchService } from 'src/app/Service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  filteredServices: any[] = []; // Replace with your service type if necessary

  constructor(private apiService: ApiService, public search: SearchService) {}

  loading = false;
  error = '';

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((query) => {
          this.loading = true;
          this.error = '';
          return this.apiService.searchServices(query);
        })
      )
      .subscribe({
        next: (services: any) => {
          this.filteredServices = services.data.map((service: any) => {
            // Add an additional attribute based on the service name
            if (service.attributes.productName === 'Cyber Security') {
              return { ...service, urlpatch: 'cyber-security' };
            } else if (
              service.attributes.productName === 'Security Technologies'
            ) {
              return {
                ...service,
                urlpatch: 'security-technologies',
              };
            } else if (
              service.attributes.productName ===
              'Identity Risk Solutions & Outsourcing'
            ) {
              return {
                ...service,
                urlpatch: 'outsourcing-investigations-identity',
              };
            } else if (
              service.attributes.productName === 'Risk Advisory & Consultancy'
            ) {
              return {
                ...service,
                urlpatch: 'risk-advisory-and-consulting',
              };
            } else if (
              service.attributes.productName === 'Physical Security & Mobility'
            ) {
              return {
                ...service,
                urlpatch: 'physical-security',
              };
            } else if (
              service.attributes.productName === 'Security Education'
            ) {
              return {
                ...service,
                urlpatch: 'security-seducation',
              };
            } else {
              return { ...service, urlpatch: '/' };
            }
          });

          this.loading = false;
          console.log(this.filteredServices);
        },
        error: (err) => {
          this.loading = false;
          this.error = 'Failed to fetch services';
        },
        complete: () => {
          // Optional: Handle when the observable completes if needed
        },
      });
  }
  cancel() {
    this.search.hide();
    this.filteredServices = [];
    this.searchControl.setValue('');
  }
}
