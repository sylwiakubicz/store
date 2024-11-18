import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { SearchReducer } from './state/search/search.reducers';

import { routes } from './app.routes';
import { NavbarReducer } from './state/navbar/navbar.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore({ search: SearchReducer, navbar: NavbarReducer }), 
    provideState({name: 'search', reducer: SearchReducer}),
    provideState({name: 'navbar', reducer: NavbarReducer})
  ]
};
