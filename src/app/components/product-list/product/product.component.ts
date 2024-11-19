import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { StarIconComponent } from '../../icons/star-icon/star-icon.component';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule, StarIconComponent, NgOptimizedImage],
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product!: Product;

    get isAvailable(): boolean {
        return this.product.status !== 'out_of_stock';
    }

    get imageUrl(): string {
        return `assets/images/${this.product.images.main}`;
    }

    onAddToCart(): void {
        console.log('Adding to cart:', this.product);
    }
}