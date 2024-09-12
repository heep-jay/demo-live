import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-pop',
  templateUrl: './modal-pop.component.html',
  styleUrls: ['./modal-pop.component.css'],
})
export class ModalPopComponent implements OnInit {
  @Input() services: any;
  @Output() closeModal = new EventEmitter();
  formName: string = '';
  formEmail: any = '';
  formSubject: string = '';
  formMessage: string = '';
  formTel: any = '';
  formData: any;
  selectedService = '';
  constructor(
    private api: ApiService,
    public dialog: MatDialog,
    private router: Router
  ) {}

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
        halogenEmail: ['marketing@halogen-group.com'],
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

  onSelectService(service: any) {
    this.selectedService = service;
    this.formSubject = this.selectedService;
  }
  openDialog(content: any) {
    this.dialog.open(content);
  }
  closeModall() {
    this.closeModal.emit();
  }
}
