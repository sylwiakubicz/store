import { Component } from '@angular/core';
import { HeaderWrapperComponent } from '../header/header-wrapper/header-wrapper.component';
import { FooterWrapperComponent } from '../footer/footer-wrapper/footer-wrapper.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderWrapperComponent,
    FooterWrapperComponent,
    ProductListComponent,
    SectionTitleComponent
  ],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
