import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-analytical',
  templateUrl: './analytical.component.html',
  styleUrls: ['./analytical.component.css']
})
export class AnalyticalComponent implements OnInit {
  formName: string = "";
  formEmail: any = ""
  formSubject: string = "";
  formMessage: string = "";
  selectedService = ""
  formData: any;
  constructor(private api: ApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onSelectService(service: any) {
    this.selectedService = service
    this.formSubject = this.selectedService
  }
  openDialog(content: any) {
    this.dialog.open(content);
  }
  scrolll(data: any) {
    console.log(data)
    var element = document.getElementById(data)?.getBoundingClientRect().top
    var headerOffset = 145;
    var offsetPosition = element! + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
  onSubmit() {
    this.formData = {
      "customerEmailInfo": {
        "name": this.formName,
        "customerEmail": [
          this.formEmail
        ],
        "subject": JSON.stringify(this.formSubject)
      },
      "halogenEmailInfo": {
        "name": this.formName,
        "mobileNumber": "",
        "message": this.formMessage,
        "halogenEmail": [
          "info@halogen-group.com"
        ]
      }
    }
    console.log(this.formData)
    this.api.bookService(this.formData).subscribe()
    this.formMessage = ""
    this.formName = ""
    this.formSubject = ""
    this.formEmail = ""
  }

}
