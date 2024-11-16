import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hexagon',
    standalone: true,
    template: `
            <div class="relative rotate-[30deg]" [style.width]="width + 'px'" [style.height]="height + 'px'">
                <div [class]="'absolute rounded-[4px/2px] ' + color" [style.width]="width + 'px'" [style.height]="height + 'px'"></div>
                <div [class]="'absolute rotate-[60deg] rounded-[4px/2px] ' + color" [style.width]="width + 'px'" [style.height]="height + 'px'"></div>
                <div [class]="'absolute -rotate-[60deg] rounded-[4px/2px] ' + color" [style.width]="width + 'px'" [style.height]="height + 'px'"></div>
                <ng-content></ng-content>
            </div>
    `
})
export class HexagonComponent {
    @Input() color: string = '';
    @Input() width: number = 80; 
    @Input() height: number = 80; 
} 