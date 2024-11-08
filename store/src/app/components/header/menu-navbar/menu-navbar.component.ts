import { Component } from '@angular/core';
import { DropdownArrowComponent } from '../../icons/dropdown-arrow/dropdown-arrow.component';
import * as menu from "../../../../assets/data/menu.json"
import { NgFor, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-menu-navbar',
  standalone: true,
  imports: [
    DropdownArrowComponent,
    NgFor,
    NgIf,
    NgClass
  ],
  templateUrl: './menu-navbar.component.html',
  styleUrl: `./menu-navbar.component.css`
})
export class MenuNavbarComponent {
  subMenuTabs: any = (menu as any).default;
}

