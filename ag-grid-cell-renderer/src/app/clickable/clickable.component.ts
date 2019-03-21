import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clickable',
  templateUrl: './clickable.component.html',
  styleUrls: ['./clickable.component.css']
})
export class ClickableComponent {
    @Input() cell: any;
    @Output() buttonClicked = new EventEmitter();

    click(): void {
       this.buttonClicked.emit(this.cell);
    }
}
