import { Component } from '@angular/core';
import { MenuNavbarComponent } from '../menu-navbar/menu-navbar.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { HamburgerMenuIconComponent } from '../../icons/hamburger-menu-icon/hamburger-menu-icon.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/app.state';
import { selectIsSidebarNavbarShow } from '../../../states/navbar/navbar.selector';
import { toggleShowSidebarNavbar } from '../../../states/navbar/navbar.actions';

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
  isSidebarNavbarShow : Observable<boolean> 

  constructor(private store: Store<AppState>) {
    this.isSidebarNavbarShow = this.store.select(selectIsSidebarNavbarShow)
  }

  toggleShowSidebarNavbar() {
    this.store.dispatch(toggleShowSidebarNavbar())
  }
}
