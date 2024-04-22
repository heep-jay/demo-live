import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pop',
  templateUrl: './modal-pop.component.html',
  styleUrls: ['./modal-pop.component.css'],
})
export class ModalPopComponent implements OnInit {
  @Input() services: any;
  formName: string = '';
  formEmail: any = '';
  formSubject: string = '';
  formMessage: string = '';
  formTel: any = '';
  formData: any;
  selectedService = '';
  constructor(private api: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {}
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
        halogenEmail: ['info@halogen-group.com'],
      },
    };

    this.api.bookService(this.formData).subscribe();
    this.formMessage = '';
    this.formName = '';
    this.formSubject = '';
    this.formEmail = '';
    this.formTel = '';
  }

  onSelectService(service: any) {
    this.selectedService = service;
    this.formSubject = this.selectedService;
  }
  openDialog(content: any) {
    this.dialog.open(content);
  }
}
