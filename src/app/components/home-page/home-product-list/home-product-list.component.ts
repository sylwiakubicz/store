import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ProductComponent } from '../../product-list/product/product.component';
import * as ProductActions from '../../../state/products/product.actions';
import * as ProductSelectors from '../../../state/products/product.selectors';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home-product-list',
    standalone: true,
    imports: [CommonModule, ProductComponent],
    template: `
        <div class="w-full max-w-[1400px] mx-auto px-5 py-8">
            @if (loading$ | async) {
                <div>Loading...</div>
            } @else if (error$ | async) {
                <div>Error: {{ error$ }}</div>
            } @else {
                <div class="grid grid-cols-1 gap-4 h-full sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-8">
                    @for (product of filteredProducts$ | async; track product.id) {
                        <app-product [product]="product" />
                    }
                </div>
            }
        </div>
    `
})
export class HomeProductListComponent implements OnInit {
    @Input() listType: 'recommended' | 'new' = 'recommended';
    private readonly ITEMS_TO_SHOW = 8;
    
    loading$ = this.store.select(ProductSelectors.selectProductsLoading);
    error$ = this.store.select(ProductSelectors.selectProductsError);

    filteredProducts$ = this.store.select(ProductSelectors.selectAllProducts).pipe(
        map(products => {
            if (!products.length) return [];
            
            if (this.listType === 'new') {
                return [...products]
                    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
                    .slice(0, this.ITEMS_TO_SHOW);
            } else {
                return [...products]
                    .sort(() => 0.5 - Math.random())
                    .slice(0, this.ITEMS_TO_SHOW);
            }
        })
    );

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(ProductActions.loadProducts());
    }
}