import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import {HexagonComponent} from '../../icons/hexagon/hexagon.component'
import { CommonModule } from '@angular/common';
import { OfferIconsComponent } from '../offer-icons/offer-icons.component';
import { Category } from "../types/category.type";

@Component({
    selector: 'app-offer-category-card',
    templateUrl: './offer-category-card.component.html',
    standalone: true,
    imports: [
        HexagonComponent,
        CommonModule, 
        OfferIconsComponent
    ]
})
export class OfferCategoryCardComponent implements OnInit, OnDestroy {
    @Input({ required: true }) category!: Category;
    
    width: number = 50;
    height: number = 110;
    private destroy$ = new Subject<void>();

    constructor(private breakpointObserver: BreakpointObserver) {}

    ngOnInit() {
        this.breakpointObserver
            .observe([
                '(min-width: 1536px)',  // 2xl
                '(min-width: 1280px)',  // xl
                '(min-width: 1024px)',  // lg
                '(min-width: 768px)',   // md
                '(min-width: 640px)'    // sm
            ])
            .pipe(takeUntil(this.destroy$))
            .subscribe(result => {
                if (result.breakpoints['(min-width: 1536px)']) {
                    this.width = 80;
                    this.height = 140;
                } else if (result.breakpoints['(min-width: 1280px)']) {
                    this.width = 75;
                    this.height = 130;
                } else if (result.breakpoints['(min-width: 1024px)']) {
                    this.width = 68;
                    this.height = 120;
                } else if (result.breakpoints['(min-width: 768px)']) {
                    this.width = 50;
                    this.height = 90;
                } else if (result.breakpoints['(min-width: 640px)']) {
                    this.width = 50;
                    this.height = 90;
                } else {
                    this.width = 40;
                    this.height = 70;
                }
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
} 