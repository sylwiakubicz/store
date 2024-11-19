import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductComponent, HttpClientModule],
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<{products: Product[]}>('assets/data/products.json')
            .subscribe(data => {
                this.products = data.products.map(product => ({
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    images: product.images,
                    status: product.status
                }));
            });
    }
}