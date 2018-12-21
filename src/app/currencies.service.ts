import { Injectable } from '@angular/core';
import {CurrencyModel} from "./currencyModel";

@Injectable()
export class CurrenciesService {

    dataCurrencies: CurrencyModel[] = [
        {
            "id": "USD",
            "attributes": {
                "code": "USD",
                "name": "US Dollar",
                "currency_type": "national",
                "code_iso_numeric3": "840",
                "code_iso_alpha3": "USD",
                "symbol": "$",
                "native_symbol": "$",
                "category": "others"
            },
        },
        {
            "id": "EUR",
            "attributes": {
                "code": "EUR",
                "name": "Euro",
                "currency_type": "national",
                "code_iso_numeric3": "978",
                "code_iso_alpha3": "EUR",
                "symbol": "€",
                "native_symbol": "€",
                "category": "others"
            }
        },
        {
            "id": "JPY",
            "attributes": {
                "code": "JPY",
                "name": "Yen",
                "currency_type": "national",
                "code_iso_numeric3": "392",
                "code_iso_alpha3": "JPY",
                "symbol": "¥",
                "native_symbol": "￥",
                "category": "others"
            }
        },
        {
            "id": "ARS",
            "attributes": {
                "code": "ARS",
                "name": "Argentine Peso",
                "currency_type": "national",
                "code_iso_numeric3": "032",
                "code_iso_alpha3": "ARS",
                "symbol": "AR$",
                "native_symbol": "$",
                "category": "others"
            }
        },
        {
            "id": "CUC",
            "attributes": {
                "code": "CUC",
                "name": "Peso Convertible",
                "currency_type": "national",
                "code_iso_numeric3": "931",
                "code_iso_alpha3": "CUC",
                "symbol": null,
                "native_symbol": null,
                "category": "others"
            }
        },
        {
            "id": "CHF",
            "attributes": {
                "code": "CHF",
                "name": "Swiss Franc",
                "currency_type": "national",
                "code_iso_numeric3": "756",
                "code_iso_alpha3": "CHF",
                "symbol": "CHF",
                "native_symbol": "CHF",
                "category": "others"
            }
        }
    ];
  constructor() { }

}
