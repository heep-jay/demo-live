import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gdprpopup',
  templateUrl: './gdprpopup.component.html',
  styleUrls: ['./gdprpopup.component.css'],
})
export class GdprpopupComponent implements OnInit {
  displayPopup = false;
  constructor() {}

  ngOnInit(): void {
    // Check if the popup should be displayed
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    if (!hasVisitedBefore) {
      this.displayPopup = true;
      // Set a flag in local storage to prevent the popup from showing again
      localStorage.setItem('hasVisited', 'true');
    }
  }

  closePopup() {
    this.displayPopup = false;
  }
}
