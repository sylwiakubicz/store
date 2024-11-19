import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ProductComponent } from './product/product.component';
import * as ProductActions from '../../state/products/product.actions';
import * as ProductSelectors from '../../state/products/product.selectors';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductComponent],
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    products$ = this.store.select(ProductSelectors.selectAllProducts);
    loading$ = this.store.select(ProductSelectors.selectProductsLoading);
    error$ = this.store.select(ProductSelectors.selectProductsError);

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(ProductActions.loadProducts());
    }
}