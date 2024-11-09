import { Component } from '@angular/core';
import { MenuNavbarComponent } from '../menu-navbar/menu-navbar.component';
import { NgClass } from '@angular/common';
import { HamburgerMenuIconComponent } from '../../icons/hamburger-menu-icon/hamburger-menu-icon.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuNavbarComponent,
    NgClass,
    HamburgerMenuIconComponent
  ],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  showNavbar : boolean = false

  toggleNavber() {
    this.showNavbar = !this.showNavbar
  }
}
