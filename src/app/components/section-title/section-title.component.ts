import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styles: ``
})
export class SectionTitleComponent {
  @Input() title: string = '';
}
