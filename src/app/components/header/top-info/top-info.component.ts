import { Component } from '@angular/core';
import { CircleIconComponent } from '../../icons/circle-icon/circle-icon.component';
import { ThemeToggleButtonComponent } from '../theme-toggle-button/theme-toggle-button.component';

@Component({
  selector: 'app-top-info',
  standalone: true,
  imports: [
    CircleIconComponent,
    ThemeToggleButtonComponent
  ],
  templateUrl: './top-info.component.html',
})
export class TopInfoComponent {
}
