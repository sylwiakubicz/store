import { Component } from '@angular/core';
import { WandMagicIconComponent } from '../../icons/wand-magic-icon/wand-magic-icon.component';
import { WandMagicSparklesIconComponent } from '../../icons/wand-magic-sparkles-icon/wand-magic-sparkles-icon.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-theme-toggle-button',
  standalone: true,
  imports: [
    WandMagicIconComponent,
    WandMagicSparklesIconComponent,
    NgClass
  ],
  templateUrl: './theme-toggle-button.component.html',
  styles: ``
})
export class ThemeToggleButtonComponent {
  isDarkMode : boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode
  }
}
