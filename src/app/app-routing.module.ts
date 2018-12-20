import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AvailableCurrenciesComponent} from "./available-currencies/available-currencies.component";

const routes: Routes = [
    {path: '', redirectTo: '/availableCurrencies', pathMatch: 'full'
    },{
        path: 'availableCurrencies',
        component: AvailableCurrenciesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
