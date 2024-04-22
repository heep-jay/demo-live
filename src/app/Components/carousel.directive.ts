import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCarousel]',
})
export class CarouselDirective {
  @Output()
  resize: EventEmitter<any> = new EventEmitter();
  height!: number;
  @HostListener('window:keydown', ['$event'])
  resizeHandler(event: any) {
    if (window.matchMedia('(max-width: 500px)').matches) {
      this.height = 400;
    } else {
      this.height = 850;
    }

    this.resize.emit(this.height);
    return this.height;
  }
}
