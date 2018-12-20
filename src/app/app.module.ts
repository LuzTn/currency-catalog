import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvailableCurrenciesComponent } from './available-currencies/available-currencies.component';
import {CurrenciesService} from "./currencies.service";
import {AppRoutingModule} from "./app-routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import {CurrenciesDetailsComponent} from "./currencies-details/currencies-details.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AvailableCurrenciesComponent,
    CurrenciesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
