import { Component } from '@angular/core';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { Testimonial } from './types/testimonial.type';

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  imports: [
    TestimonialCardComponent
  ],
  templateUrl: './home-testimonials.component.html',
  styles: ``
})
export class HomeTestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      icon: 'box',
      iconColor: 'fill-pine-green',
      name: 'Wide variety',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor.'
    },
    {
      id: 2,
      icon: 'local',
      iconColor: 'fill-custom-orange',
      name: 'Friendly Local Game Store',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor.'
    },
    {
      id: 3,
      icon: 'order',
      iconColor: 'fill-custom-blue',
      name: 'Reliable Store',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor.'
    }
  ];
}
