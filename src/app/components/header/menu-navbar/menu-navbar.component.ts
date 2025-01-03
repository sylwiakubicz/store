import { Component } from '@angular/core';
import { DropdownArrowComponent } from '../../icons/dropdown-arrow/dropdown-arrow.component';
import * as menu from "../../../../assets/data/menu.json"
import { CommonModule } from '@angular/common';
import {FacebookIconComponent } from '../../icons/facebook-icon/facebook-icon.component'
import { InstagramIconComponent } from '../../icons/instagram-icon/instagram-icon.component';
import { PawnIconComponent } from '../../icons/pawn-icon/pawn-icon.component';

@Component({
  selector: 'app-menu-navbar',
  standalone: true,
  imports: [
    DropdownArrowComponent,
    FacebookIconComponent,
    InstagramIconComponent,
    PawnIconComponent,
    CommonModule
  ],
  templateUrl: './menu-navbar.component.html',
})
export class MenuNavbarComponent {
  subMenuTabs: any = (menu as any).default;

  handleDropdownMenu() {
    if (innerWidth < 1024) {
      const dropdownMenu = document.querySelector("li > div");
      if (dropdownMenu?.classList.contains("hidden")) {
        dropdownMenu.classList.remove("hidden")
      } else {
        dropdownMenu?.classList.add("hidden")
      }
    } 
  }

  handleDropdownSubMenu(id : string) {
    if (innerWidth < 1024) {
      const dropdownMenu = document.querySelectorAll("li > div");
      dropdownMenu.forEach(dropdown => dropdown.id === id 
        ? (dropdown.classList.contains("hidden") ? dropdown.classList.remove("hidden") : dropdown.classList.add("hidden"))
        : dropdown.classList.add("hidden"))
    }
  }
}

