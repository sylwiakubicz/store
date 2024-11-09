import { Component } from '@angular/core';
import { TopInfoComponent } from '../top-info/top-info.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header-wrapper',
  standalone: true,
  imports: [
    TopInfoComponent,
    HeaderComponent,
    MenuComponent
  ],
  templateUrl: './header-wrapper.component.html',
})
export class HeaderWrapperComponent {
}
