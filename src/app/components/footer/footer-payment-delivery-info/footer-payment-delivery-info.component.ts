import { Component } from '@angular/core';
import { DeliveryIconsComponent } from '../../icons/delivery-icons/delivery-icons.component';
import { PaymentIconsComponent } from '../../icons/payment-icons/payment-icons.component';

@Component({
  selector: 'app-footer-payment-delivery-info',
  standalone: true,
  imports: [
    DeliveryIconsComponent,
    PaymentIconsComponent
  ],
  templateUrl: './footer-payment-delivery-info.component.html',
  styles: ``
})
export class FooterPaymentDeliveryInfoComponent {

}
