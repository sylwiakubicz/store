import { Component } from '@angular/core';
import { HexagonComponent } from '../../icons/hexagon/hexagon.component';
import { AngularLogoIconComponent } from '../../icons/angular-logo-icon/angular-logo-icon.component';

@Component({
  selector: 'app-home-address',
  standalone: true,
  imports: [
    HexagonComponent,
    AngularLogoIconComponent
  ],
  templateUrl: './home-address.component.html',
  styles: ``
})
export class HomeAddressComponent {

}
