import { Component, OnInit } from '@angular/core';
import {CurrencyModel} from "../currencyModel";
import {CurrenciesService} from "../currencies.service";
import {FilterPipe} from "ngx-filter-pipe";

@Component({
  selector: 'app-available-currencies',
  templateUrl: './available-currencies.component.html',
  styleUrls: ['./available-currencies.component.css']
})
export class AvailableCurrenciesComponent implements OnInit {

  currenciesArray: CurrencyModel[];
  optionsFilter: string[] = ['id', 'code', 'name', 'type'];
  selectedFilter: string = '';
  currencyFilter : CurrencyModel = {id:'', attributes:[]};

  constructor(private currenciesService: CurrenciesService, private filterPipe: FilterPipe) {
  }

  ngOnInit() {
      this.currenciesArray = this.currenciesService.dataCurrencies;
  }

}
