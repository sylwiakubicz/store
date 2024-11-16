import { Component } from '@angular/core';
import { AngularLogoIconComponent } from '../../icons/angular-logo-icon/angular-logo-icon.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [
    AngularLogoIconComponent,
    NgOptimizedImage
  ],
  templateUrl: './home-about.component.html',
  styles: ``
})
export class HomeAboutComponent {

}
