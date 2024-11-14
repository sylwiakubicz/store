import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductComponent],
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    products: Product[] = [
        {
            id: 1,
            category: 'boardgame',
            name: "Blood Angels: Lemartes (Warhammer 40,000)",
            price: 127.00,
            imageUrl: "https://img.freepik.com/premium-psd/board-game-icon-isolated-transparent-background-png-psd_888962-2881.jpg",
            isAvailable: true
        },
        {
            id: 2,
            category: 'boardgame',
            name: "Blood Angels: Lemartes (Warhammer 40,000)",
            price: 127.00,
            imageUrl: "https://img.freepik.com/premium-psd/board-game-icon-isolated-transparent-background-png-psd_888962-2881.jpg",
            isAvailable: false
        },{
            id: 3,
            category: 'boardgame',
            name: "Blood Angels: Lemartes (Warhammer 40,000)",
            price: 127.00,
            imageUrl: "https://img.freepik.com/premium-psd/board-game-icon-isolated-transparent-background-png-psd_888962-2881.jpg",
            isAvailable: true
        },{
            id: 4,
            category: 'boardgame',
            name: "Blood Angels: Lemartes (Warhammer 40,000)",
            price: 127.00,
            imageUrl: "https://img.freepik.com/premium-psd/board-game-icon-isolated-transparent-background-png-psd_888962-2881.jpg",
            isAvailable: true
        },{
            id: 5,
            category: 'boardgame',
            name: "Blood Angels: Lemartes (Warhammer 40,000)",
            price: 127.00,
            imageUrl: "https://img.freepik.com/premium-psd/board-game-icon-isolated-transparent-background-png-psd_888962-2881.jpg",
            isAvailable: true
        },{
            id: 6,
            category: 'boardgame',
            name: "Blood Angels: Lemartes (Warhammer 40,000)",
            price: 127.00,
            imageUrl: "https://img.freepik.com/premium-psd/board-game-icon-isolated-transparent-background-png-psd_888962-2881.jpg",
            isAvailable: true
        }
        ,{
            id: 7,
            category: 'boardgame',
            name: "Blood Angels: Lemartes (Warhammer 40,000)",
            price: 127.00,
            imageUrl: "https://img.freepik.com/premium-psd/board-game-icon-isolated-transparent-background-png-psd_888962-2881.jpg",
            isAvailable: true
        },{
            id: 8,
            category: 'boardgame',
            name: "Blood Angels: Lemartes (Warhammer 40,000)",
            price: 127.00,
            imageUrl: "https://img.freepik.com/premium-psd/board-game-icon-isolated-transparent-background-png-psd_888962-2881.jpg",
            isAvailable: true
        }
    ];
}