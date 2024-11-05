import { Component } from '@angular/core';
import { DropdownArrowComponent } from '../../icons/dropdown-arrow/dropdown-arrow.component';
@Component({
  selector: 'app-menu-navbar',
  standalone: true,
  imports: [
    DropdownArrowComponent
  ],
  templateUrl: './menu-navbar.component.html',
  styleUrl: `./menu-navbar.component.css`
})
export class MenuNavbarComponent {

}
