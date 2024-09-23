import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true,
    },
  ],
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent implements ControlValueAccessor {
  @ViewChild('optionsRef') optionsRef!: ElementRef<HTMLDivElement>;

  protected value: any[] = [];
  protected disabled = false;
  protected _options: any[] = [];
  protected _labelField: string = '';
  protected show = false;

  protected onChange = (_val: any) => {};
  protected onTouched = () => {};

  constructor(private elementRef: ElementRef) {}

  writeValue(value: any): void {
    this.value = value || [];
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // get invalid() {
  //   return this.ngControl?.invalid && this.ngControl?.touched;
  // }

  toggleShow() {
    this.show = !this.show;
  }

  checkIfExist(item: any) {
    return !!this.value.find(
      (v: any) => JSON.stringify(v) === JSON.stringify(item)
    );
  }

  onSelect(item: any) {
    const isExisting = this.checkIfExist(item);
    if (isExisting) {
      this.value = this.value.filter(
        (v: any) => JSON.stringify(v) !== JSON.stringify(item)
      );
    } else {
      this.value.push(item);
    }
    this.onChange(this.value);
  }

  @HostListener('document:click', ['$event'])
  clickedOutside(event: any) {
    if (!this.elementRef.nativeElement.contains(event.target) && this.show) {
      console.log(this.optionsRef?.nativeElement);
      if (!this.optionsRef.nativeElement.contains(event.target)) {
        this.show = false;
      }
    }
  }

  @Input()
  set options(val: any[]) {
    this._options = val;
  }

  @Input()
  set label(val: string) {
    this._labelField = val;
  }
}
