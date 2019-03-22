import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickableParentComponent } from './clickable-parent/clickable-parent.component';
import { ClickableComponent } from './clickable/clickable.component';
import { UserComponent } from './user/user.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickableParentComponent,
    ClickableComponent,
    UserComponent,
    DeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([
        ClickableParentComponent,
        DeleteButtonComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
