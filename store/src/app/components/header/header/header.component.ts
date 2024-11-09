import { Component } from '@angular/core';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderBasketInfoComponent } from '../header-basket-info/header-basket-info.component';
import { HeaderSearchComponent } from '../header-search/header-search.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { SearchIconComponent } from '../../icons/search-icon/search-icon.component';
import { CrossIconComponent } from '../../icons/cross-icon/cross-icon.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../states/app.state';
import { selectIsSearchShow } from '../../../states/search/search.selector';
import { toggleSearchInput } from '../../../states/search/search.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderLogoComponent,
    HeaderBasketInfoComponent,
    HeaderSearchComponent,
    NgClass,
    SearchIconComponent,
    CrossIconComponent,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isSearchShow : Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isSearchShow = this.store.select(selectIsSearchShow)
  }

  toggleSearchInput() {
    this.store.dispatch(toggleSearchInput())
  }
}
