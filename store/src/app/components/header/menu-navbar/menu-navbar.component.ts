import { Component, OnInit, AfterViewInit, Renderer2  } from '@angular/core';
import { DropdownArrowComponent } from '../../icons/dropdown-arrow/dropdown-arrow.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as menu from "../../../../assets/data/menu.json"
import { NgFor, NgIf, NgClass } from '@angular/common';

declare var Flowbite: any;

@Component({
  selector: 'app-menu-navbar',
  standalone: true,
  imports: [
    DropdownArrowComponent,
    NgFor,
    NgIf,
    NgClass
  ],
  templateUrl: './menu-navbar.component.html',
  styleUrl: `./menu-navbar.component.css`
})
export class MenuNavbarComponent {

  isScreenLarge: boolean = false;
  subMenuTabs: any = (menu as any).default;
  
  constructor (
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
  ) {console.log(this.subMenuTabs)}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 1024px)'])
      .subscribe(result => {
        this.isScreenLarge = result.matches;
        this.updateDropdownTriggers();
      });

  }

  ngAfterViewInit(): void {
    Flowbite.initDropdowns();
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

