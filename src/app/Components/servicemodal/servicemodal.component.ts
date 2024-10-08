import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicemodal',
  templateUrl: './servicemodal.component.html',
  styleUrls: ['./servicemodal.component.css'],
})
export class ServicemodalComponent implements OnInit {
  @Input() productName!: any;
  formName: string = '';
  formEmail: any = '';
  formSubject: string = '';
  formMessage: string = '';
  formData: any;
  formFname: string = '';
  formTel: any = '';
  formLname: string = '';
  btnName: string = 'Book Service';

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      this.productName === 'Halogen scholars' ||
      this.productName === 'Academy halogen'
    ) {
      this.btnName = 'Sign Up';
    }
  }
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
        halogenEmail: ['marketing@halogen-group.com'],
      },
    };
    this.api.bookService(this.formData).subscribe();
    this.formMessage = '';
    this.formName = '';
    this.formSubject = '';
    this.formEmail = '';
    this.formFname = '';
    this.formLname = '';
    this.formTel = '';

    this.modalService.dismissAll();
    this.router.navigate(['/thank-you']);
  }

  openDialog(content: any) {
    this.dialog.open(content);
  }
}
