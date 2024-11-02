import { Component } from '@angular/core';
import { MenuNavbarComponent } from '../menu-navbar/menu-navbar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuNavbarComponent,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  showNavbar : boolean = false

  toggleNavber() {
    this.showNavbar = !this.showNavbar
  }
}
