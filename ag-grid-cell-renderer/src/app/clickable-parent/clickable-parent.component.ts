import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-clickable-parent',
  templateUrl: './clickable-parent.component.html'
})
export class ClickableParentComponent implements ICellRendererAngularComp {
    private params: any;
    public cell: any;

    agInit(params: any): void {
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
    }

    public clicked(cell: any): void {
        console.log('Child Cell Clicked: ' + JSON.stringify(cell));
        console.log(cell.row);
    }

    refresh(): boolean {
        return false;
    }
}
