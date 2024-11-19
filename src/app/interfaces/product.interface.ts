export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    images: {
        main: string;
        secondary: string;
        detail: string;
    };
    status: 'in_stock' | 'low_stock' | 'out_of_stock';
}