import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';
@Directive({
  selector: '[appSortBy]'
})
export class SortbyDirective {

  constructor() { }

  @Output()
  sorted: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('change', ['$event']) change(event) {
    this.sorted.next(event.target.value); // Raise clicked event
    console.log(event.target.value);
  }
}
