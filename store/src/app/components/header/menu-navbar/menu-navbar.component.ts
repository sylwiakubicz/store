import { Component, OnInit, AfterViewInit, Renderer2  } from '@angular/core';
import { DropdownArrowComponent } from '../../icons/dropdown-arrow/dropdown-arrow.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu-navbar',
  standalone: true,
  imports: [
    DropdownArrowComponent,
  ],
  templateUrl: './menu-navbar.component.html',
  styleUrl: `./menu-navbar.component.css`
})
export class MenuNavbarComponent {
  isScreenLarge: boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 1024px)'])
      .subscribe(result => {
        this.isScreenLarge = result.matches;
        console.log(this.isScreenLarge)
        this.updateDropdownTriggers();
      });
  }

  ngAfterViewInit(): void {
    this.updateDropdownTriggers();
  }

  updateDropdownTriggers(): void {
    const buttons = document.querySelectorAll('.dropDownButton');
    buttons.forEach(button => {
      console.log("for each")
      const triggerValue = this.isScreenLarge ? 'hover' : 'click';
      this.renderer.setAttribute(button, 'data-dropdown-trigger', triggerValue);
    });
  }
}

