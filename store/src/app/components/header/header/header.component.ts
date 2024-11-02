import { Component } from '@angular/core';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderBasketInfoComponent } from '../header-basket-info/header-basket-info.component';
import { HeaderSearchComponent } from '../header-search/header-search.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderLogoComponent,
    HeaderBasketInfoComponent,
    HeaderSearchComponent
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
