export type OfferIcon = 'calendar' | 'gift-box' | 'discount';

export interface Category {
    type: string;
    icon: OfferIcon;
    title: string;
    subtitle: string;
    ctaText: string;
    color: string;
    hexagonColor: string;
}
