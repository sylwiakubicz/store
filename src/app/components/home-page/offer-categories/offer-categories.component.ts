import { Component } from "@angular/core";
import { OfferCategoryCardComponent } from "./offer-category-card/offer-category-card.component";
import { Category } from './types/category.type';

@Component({
    selector: 'app-offer-categories',
    standalone: true,
    imports: [OfferCategoryCardComponent],
    templateUrl: './offer-categories.component.html'
})
export class OfferCategoriesComponent {
    categories: Category[] = [
        {
            type: 'pre-order',
            icon: 'calendar',
            title: 'PRE-ORDER',
            subtitle: 'RESERVE IT NOW!',
            ctaText: 'CHECK OUR OFFER',
            color: 'custom-orange',
            hexagonColor: 'bg-custom-orange'
        },
        {
            type: 'new',
            icon: 'gift-box',
            title: 'NEW STUFF',
            subtitle: 'NEW STUFF',
            ctaText: 'CHECK OUR OFFER',
            color: 'custom-blue',
            hexagonColor: 'bg-custom-blue'
        },
        {
            type: 'sale',
            icon: 'discount',
            title: 'ON SALE',
            subtitle: 'GOOD PRICES',
            ctaText: 'CHECK OUR OFFER',
            color: 'pine-green',
            hexagonColor: 'bg-pine-green'
        }
    ];
} 