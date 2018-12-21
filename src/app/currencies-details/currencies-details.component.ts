import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrenciesService} from "../currencies.service";
import {CurrencyModel} from "../currencyModel";

@Component({
  selector: 'app-currencies-details',
  templateUrl: './currencies-details.component.html',
  styleUrls: ['./currencies-details.component.css']
})
export class CurrenciesDetailsComponent implements OnInit {
    currency: CurrencyModel;

    constructor(private route: ActivatedRoute, private currenciesService: CurrenciesService) {
        this.route.params.subscribe( params => {
            for(let i = 0; i < this.currenciesService.dataCurrencies.length; i++) {
                if(this.currenciesService.dataCurrencies[i].id == params.id){
                    this.currency = this.currenciesService.dataCurrencies[i];
                }
            }
        } );
    }

  ngOnInit() {
  }

}
