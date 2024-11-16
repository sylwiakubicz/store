import { Component } from '@angular/core';
import { HeaderWrapperComponent } from '../header/header-wrapper/header-wrapper.component';
import { FooterWrapperComponent } from '../footer/footer-wrapper/footer-wrapper.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { BannerComponent } from '../banner/banner.component';
import { OfferCategoriesComponent } from './offer-categories/offer-categories.component';
import { AdvertiserBannerComponent } from '../advertiser-banner/advertiser-banner.component';
import { HomeAboutComponent } from './home-about/home-about.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderWrapperComponent,
    FooterWrapperComponent,
    ProductListComponent,
    SectionTitleComponent,
    BannerComponent,
    OfferCategoriesComponent,
    AdvertiserBannerComponent,
    HomeAboutComponent
  ],
  templateUrl: './home-page.component.html',
  styles: ``
})
export class HomePageComponent {

}
