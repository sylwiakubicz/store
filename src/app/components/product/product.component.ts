import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input({ required: true }) product!: Product;

    onAddToCart(): void {
        console.log('Adding to cart:', this.product);
    }
}