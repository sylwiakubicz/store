import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dropdown-arrow',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dropdown-arrow.component.html',
  styles: ``
})
export class DropdownArrowComponent {
  @Input() rightArrow : boolean = false;
}
