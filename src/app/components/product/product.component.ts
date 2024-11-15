import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { StarIconComponent } from '../icons/star-icon/star-icon.component';
@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule, StarIconComponent],
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input({ required: true }) product!: Product;

    onAddToCart(): void {
        console.log('Adding to cart:', this.product);
    }
}