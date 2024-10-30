import { Component } from '@angular/core';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HeaderLogoComponent
  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
