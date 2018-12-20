import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AvailableCurrenciesComponent} from "./available-currencies/available-currencies.component";
import {CurrenciesDetailsComponent} from "./currencies-details/currencies-details.component";

const routes: Routes = [
    {path: '', redirectTo: '/availableCurrencies', pathMatch: 'full'},
    {path: 'availableCurrencies', component: AvailableCurrenciesComponent },
    {path: 'currency/:id', component: CurrenciesDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
