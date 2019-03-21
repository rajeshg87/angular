import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { ClickableParentComponent } from '../clickable-parent/clickable-parent.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public gridOptions: GridOptions;

  constructor() {
      this.gridOptions = <GridOptions>{
          rowData : this.createdRowData(),
          columnDefs: this.createColumnDefs()
      };
  }

  ngOnInit() {}
 createColumnDefs() {
      return [
          {headerName: 'Name', field: 'name', sortable: true, filter: true},
          {
              headerName: 'Clickable Component',
              field: 'name',
              cellRendererFramework: ClickableParentComponent,
              width: 330
          }
      ];
  }

  createdRowData() {
      return [
        {name: 'Rajesh'},
        {name: 'Lenin'},
        {name: 'Aravind'}
      ];
  }

}
