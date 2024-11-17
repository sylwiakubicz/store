import { Component, Input } from '@angular/core';
import { Testimonial } from '../types/testimonial.type';
import { TestimonialIconsComponent } from '../testimonial-icons/testimonial-icons.component';
@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [
    TestimonialIconsComponent
  ],
  templateUrl: './testimonial-card.component.html',
  styles: ``
})
export class TestimonialCardComponent {
  @Input() testimonial!: Testimonial;
}
