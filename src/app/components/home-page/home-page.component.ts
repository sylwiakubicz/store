import { Component } from '@angular/core';
import { HeaderWrapperComponent } from '../header/header-wrapper/header-wrapper.component';
import { FooterWrapperComponent } from '../footer/footer-wrapper/footer-wrapper.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderWrapperComponent,
    FooterWrapperComponent
  ],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
