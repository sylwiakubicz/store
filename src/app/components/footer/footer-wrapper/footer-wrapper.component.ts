import { Component } from '@angular/core';
import { FooterContactInfoComponent } from '../footer-contact-info/footer-contact-info.component';
import { FooterCopyrightInfoComponent } from '../footer-copyright-info/footer-copyright-info.component';
import { FooterPaymentDeliveryInfoComponent } from '../footer-payment-delivery-info/footer-payment-delivery-info.component';
import { FooterMenuComponent } from '../footer-menu/footer-menu.component';

@Component({
  selector: 'app-footer-wrapper',
  standalone: true,
  imports: [
    FooterContactInfoComponent,
    FooterCopyrightInfoComponent,
    FooterPaymentDeliveryInfoComponent,
    FooterMenuComponent
  ],
  templateUrl: './footer-wrapper.component.html',
  styles: ``
})
export class FooterWrapperComponent {

}
