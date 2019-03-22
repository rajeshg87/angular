import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'app-delete-button',
    template: '<button (click)="deleteUser()"><span class="glyphicon glyphicon-remove"></span></button>'
})
export class DeleteButtonComponent implements ICellRendererAngularComp {

    private params: any;

    agInit(params: any): void {
        this.params = params;
    }

    public deleteUser(): void {
        console.log(this.params.value);
        console.log(this.params.colDef);
    }

    refresh(): boolean {
        return false;
    }


}
