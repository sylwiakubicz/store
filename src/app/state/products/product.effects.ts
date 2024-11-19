import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ProductActions from './product.actions';
import { ProductService } from '../../services/product.service';

@Injectable()
export class ProductEffects {
    private actions$ = inject(Actions);
    private productService = inject(ProductService);

    loadProducts$ = createEffect(() => 
        this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            switchMap(() => this.productService.loadProducts().pipe(
                map(response => ProductActions.loadProductsSuccess({ 
                    products: response.products 
                })),
                catchError(error => of(ProductActions.loadProductsFailure({ 
                    error: error.message 
                })))
            ))
        )
    );
} 