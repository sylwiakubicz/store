import { createAction, props } from '@ngrx/store';
import { Product } from '../../interfaces/product.interface';

export const loadProducts = createAction('[Products] Load Products');

export const loadProductsSuccess = createAction(
    '[Products] Load Products Success',
    props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
    '[Products] Load Products Failure',
    props<{ error: string }>()
); 