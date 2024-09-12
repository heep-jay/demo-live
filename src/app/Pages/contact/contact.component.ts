import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  selectedAdd = '';
  selectedService = '';
  name: string = '';
  phone: string = '';
  email: any;
  bgImage: any;
  services: any = '';
  add: string = '';
  locations: any;
  locationName: string = '';
  locationValue: string = '';
  locationSrc: string = '';
  src: string = '';
  formName: string = '';
  formEmail: any = '';
  formTel: any = '';
  formSubject: string = '';
  formMessage: string = '';
  formData: any;
  test: string[] = [];

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
    private titleService: Title,
    private router: Router
  ) {}
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.canonicalUrl();
    const pageTitle = 'Halogen | Contact us';
    this.setPageTitle(pageTitle);
    this.api.getContact().subscribe((data) => {
      this.name = data.attributes.name;
      this.phone = data.attributes.phone;
      this.add = data.attributes.address;
      this.email = data.attributes.email;
      this.bgImage = `http:localhost:1337${data.attributes.bgImage.data.attributes.url}`;
      this.locations = data.attributes.locations.data;
    });
    this.api.getProducts().subscribe((data) => {
      this.services = data;
      this.services.map((data: any) =>
        this.test.push(data.attributes.productName)
      );
    });
    this.src =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5790581126607!2d3.3607143510254534!3d6.574688495221693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b939c0f889bdf%3A0x200104fe47b784aa!2s19b%20Mobolaji%20Bank%20Anthony%20Way%2C%20Onigbongbo%20101233%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1674661675686!5m2!1sen!2sus';
  }
  onSelectService(service: any) {
    this.selectedService = service;
    this.formSubject = this.selectedService;
  }
  onSelected(address: string) {
    this.selectedAdd = address;
    this.locations.map((data: any) => {
      if (this.selectedAdd === data.attributes.locationVal) {
        this.src = data.attributes.locationSrc;
      }
    });
  }
  onSubmit() {
    this.formData = {
      customerEmailInfo: {
        name: this.formName,
        customerEmail: [this.formEmail],
        subject: JSON.stringify(this.formSubject),
      },
      halogenEmailInfo: {
        name: this.formName,
        mobileNumber: this.formTel,
        message: this.formMessage,
        halogenEmail: ['jubrilmuritala69@gmail.com'],
      },
    };
    this.api.bookService(this.formData).subscribe();

    this.formMessage = '';
    this.formName = '';
    this.formSubject = '';
    this.formEmail = '';
    this.formTel = '';
    this.router.navigate(['/thank-you']);
  }
  openDialog(content: any) {
    this.dialog.open(content);
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
}
