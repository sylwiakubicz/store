export interface Product {
    id: string;
    name: string;
    description: string;
    publisher: string;
    category: string;
    subCategories: string[];
    price: number;
    stockQuantity: number;
    dateAdded: string;
    images: {
        main: string;
        secondary: string;
        detail: string;
    };
    status: 'in_stock' | 'low_stock' | 'out_of_stock';
    productCode: string;
    specifications: {
        playTime: string;
        recommendedAge: string;
        playerCount: string;
        language: string[];
        dimensions: string;
        weight: string;
    };
    relatedProducts: string[];
}