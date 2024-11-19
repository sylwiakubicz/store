import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { SearchReducer } from './state/search/search.reducers';
import { NavbarReducer } from './state/navbar/navbar.reducers';
import { productReducer } from './state/products/product.reducer';
import { ProductEffects } from './state/products/product.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideStore({
            search: SearchReducer,
            navbar: NavbarReducer,
            products: productReducer
        }),
        provideEffects([ProductEffects])
    ]
};
