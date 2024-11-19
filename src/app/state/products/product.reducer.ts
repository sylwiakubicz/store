import { createReducer, on } from '@ngrx/store';
import { ProductState, initialProductState } from './product.state';
import * as ProductActions from './product.actions';

export const productReducer = createReducer(
    initialProductState,
    on(ProductActions.loadProducts, (state) => ({
        ...state,
        loading: true
    })),
    on(ProductActions.loadProductsSuccess, (state, { products }) => ({
        ...state,
        products,
        loading: false,
        error: null
    })),
    on(ProductActions.loadProductsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
); 