import {
  Component,
  inject,
  TemplateRef,
  ViewEncapsulation,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css'],
})
export class LeadersComponent implements OnInit {
  @Input() leader: any;
  private modalService = inject(NgbModal);
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(content: any) {
    this.dialog.open(content);
  }

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, {
      scrollable: true,
      size: 'xl',
      centered: true,
    });
  }
}
