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
      console.log(this.height);
    } else {
      this.height = 850;
    }
    console.log(this.height);
    this.resize.emit(this.height);
    return this.height;
  }
}
