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

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      this.isDarkMode = storedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    this.updateBodyClass();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateBodyClass();
    
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private updateBodyClass(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
