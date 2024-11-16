import { Component, Input } from '@angular/core';
import {HexagonComponent} from '../../icons/hexagon/hexagon.component'
import { CommonModule } from '@angular/common';
import { OfferIconsComponent } from '../offer-icons/offer-icons.component';
import { Category } from "../types/category.type";

@Component({
    selector: 'app-offer-category-card',
    templateUrl: './offer-category-card.component.html',
    standalone: true,
    imports: [
        HexagonComponent,
        CommonModule, 
        OfferIconsComponent
    ]
})
export class OfferCategoryCardComponent {
    @Input({ required: true }) category!: Category;
} 