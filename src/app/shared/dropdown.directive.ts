import { Directive, HostBinding, Input, HostListener } from '@angular/core';
import { element, elementClassProp } from '@angular/core/src/render3';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() appDropdown: string;
  @HostBinding('class') elementClass: string;
  constructor() { }

  @HostListener('click') mouseClicked(eventData: Event) {
    this.elementClass = this.elementClass ? '' : this.appDropdown;
  }

}
