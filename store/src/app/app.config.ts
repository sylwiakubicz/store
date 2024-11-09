import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { SearchReducer } from './states/search/search.reducers';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore({ search: SearchReducer }), 
    provideState({name: 'search', reducer: SearchReducer})]
};
