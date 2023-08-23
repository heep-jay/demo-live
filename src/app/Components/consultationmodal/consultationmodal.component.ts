import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-consultationmodal',
  templateUrl: './consultationmodal.component.html',
  styleUrls: ['./consultationmodal.component.css'],
})
export class ConsultationmodalComponent implements OnInit {
  formName: string = '';
  formEmail: any = '';
  formSubject: string = '';
  formMessage: string = '';
  formData: any;
  formFname: string = '';
  formTel: any = '';
  formLname: string = '';
  productName: string = '';
  constructor(private api: ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {}
  onSubmit() {
    this.formName = `${this.formFname} ${this.formLname}`;
    this.formData = {
      customerEmailInfo: {
        name: this.formName,
        customerEmail: [this.formEmail],
        subject: this.productName,
      },
      halogenEmailInfo: {
        name: this.formName,
        mobileNumber: this.formTel,
        message: this.formMessage,
        halogenEmail: ['jubrilmuritala69@gmail.com'],
      },
    };
    console.log(this.formData);
    this.api.bookService(this.formData).subscribe();
    this.formMessage = '';
    this.formName = '';
    this.formSubject = '';
    this.formEmail = '';
    this.formFname = '';
    this.formLname = '';
    this.formTel = '';
  }
  openDialog(content: any) {
    this.dialog.open(content);
  }
}
