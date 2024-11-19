import { Product } from '../../interfaces/product.interface';

export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export const initialProductState: ProductState = {
    products: [],
    loading: false,
    error: null
}; 