export class CurrencyModel {
    id?: string;
    attributes?: AttributesModel
}
export class AttributesModel {
    code?: string;
    name?: string;
    currency_type?: string;
    code_iso_numeric3?: string;
    code_iso_alpha3?: string;
    symbol?: string;
    native_symbol?: string;
    category?: string;
}