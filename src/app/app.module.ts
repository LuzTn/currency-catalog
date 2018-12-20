import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvailableCurrenciesComponent } from './available-currencies/available-currencies.component';
import {CurrenciesService} from "./currencies.service";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    AvailableCurrenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CurrenciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
