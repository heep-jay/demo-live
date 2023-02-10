import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {
  @Input() leader: any
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(content: any) {
    this.dialog.open(content);
  }

}
