import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BeerListTableComponent } from "./components/beer-list-table/beer-list-table.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiBeersComponent } from "./components/api-beers/api-beers.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MenuComponent } from "./components/menu/menu.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CreateBeerComponent } from "./components/create-beer/create-beer.component";
import { MyBeersService } from "./services/my-beers.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MyBeersListComponent } from './components/my-beers-list/my-beers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListTableComponent,
    ApiBeersComponent,
    MenuComponent,
    CreateBeerComponent,
    MyBeersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgxDatatableModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [MyBeersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
