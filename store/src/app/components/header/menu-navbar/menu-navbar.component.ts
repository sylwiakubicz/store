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
})
export class MenuNavbarComponent {
  subMenuTabs: any = (menu as any).default;

  handleDropdownMenu() {
    const dropdownMenu = document.querySelector("li > div");
    if (dropdownMenu?.classList.contains("hidden")) {
      dropdownMenu.classList.remove("hidden")
    } else {
      dropdownMenu?.classList.add("hidden")
    }
  }

  handleDropdownSubMenu(id : string) {
    console.log(id)
    const dropdownMenu = document.querySelectorAll("li > div");
    dropdownMenu.forEach(dropdown => dropdown.id === id 
      ? (dropdown.classList.contains("hidden") ? dropdown.classList.remove("hidden") : dropdown.classList.add("hidden"))
      : dropdown.classList.add("hidden"))
  }
}

