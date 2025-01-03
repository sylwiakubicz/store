import { Component, inject } from '@angular/core';
import { MenuNavbarComponent } from '../menu-navbar/menu-navbar.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { HamburgerMenuIconComponent } from '../../icons/hamburger-menu-icon/hamburger-menu-icon.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { selectIsSidebarNavbarShow } from '../../../state/navbar/navbar.selector';
import { toggleShowSidebarNavbar } from '../../../state/navbar/navbar.actions';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MenuNavbarComponent,
    NgClass,
    HamburgerMenuIconComponent,
    AsyncPipe
  ],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  private readonly store = inject(Store<AppState>);
  isSidebarNavbarShow = this.store.select(selectIsSidebarNavbarShow);

  toggleShowSidebarNavbar() {
    this.store.dispatch(toggleShowSidebarNavbar());
  }
}
