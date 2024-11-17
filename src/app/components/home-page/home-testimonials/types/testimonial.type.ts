export type TestimonialIcon = 'box' | 'local' | 'order';

export type Testimonial = {
    id: number;
    icon: TestimonialIcon;
    iconColor: string;
    name: string;
    text: string;
}
