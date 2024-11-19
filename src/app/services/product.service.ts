import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private http = inject(HttpClient);

    loadProducts(): Observable<{products: Product[]}> {
        return this.http.get<{products: Product[]}>('assets/data/products.json');
    }
} 