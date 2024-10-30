import { Component } from '@angular/core';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderBasketInfoComponent } from '../header-basket-info/header-basket-info.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderLogoComponent,
    HeaderBasketInfoComponent
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
