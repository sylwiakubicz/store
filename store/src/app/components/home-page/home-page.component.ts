import { Component } from '@angular/core';
import { HeaderWrapperComponent } from '../header/header-wrapper/header-wrapper.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderWrapperComponent
  ],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
