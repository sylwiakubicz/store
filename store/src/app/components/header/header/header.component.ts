import { Component } from '@angular/core';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderBasketInfoComponent } from '../header-basket-info/header-basket-info.component';
import { HeaderSearchComponent } from '../header-search/header-search.component';
import { NgClass } from '@angular/common';
import { SearchIconComponent } from '../../icons/search-icon/search-icon.component';
import { CrossIconComponent } from '../../icons/cross-icon/cross-icon.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderLogoComponent,
    HeaderBasketInfoComponent,
    HeaderSearchComponent,
    NgClass,
    SearchIconComponent,
    CrossIconComponent
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  searchToggle : boolean = true

  handleSearchToggle()  {
    this.searchToggle = !this.searchToggle
  }
}
