import { Component, OnInit, Input } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-videobox',
  templateUrl: './videobox.component.html',
  styleUrls: ['./videobox.component.css'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('void => visible', [
        style({ transform: 'scale(1)' }),
        animate('150ms', style({ transform: 'scale(0.5)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0.8 })),
      ]),
    ]),
  ],
})
export class VideoboxComponent implements OnInit {
  @Input() galleryData: any;
  @Input() showCount!: boolean;

  previewImage: boolean = false;
  showMask: boolean = false;
  currentIndex = 0;
  totalImageCount = 0;
  controls: boolean = true;
  currentLightboxImage: any;
  constructor() {}
  ngOnInit(): void {
    this.currentLightboxImage = this.galleryData[0];
    this.totalImageCount = this.galleryData.length;
    this.currentLightboxImage = this.galleryData;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }
  onClosePreview() {
    this.previewImage = false;
  }
  prev() {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex <= 0) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
  next() {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }
}
