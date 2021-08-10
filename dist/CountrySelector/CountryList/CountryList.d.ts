import { iCountries, Alpha2, SelectOptions } from './CountryList.types';
/**
 * CountryList
 */
declare class Countries implements iCountries {
    locale: Alpha2;
    localeCountriesList: import("./CountryList.types").Locales;
    countries: {
        [alpha2Key: string]: string | string[];
    };
    Alpha2: typeof Alpha2;
    constructor(locale: Alpha2);
    getSelectOptions(): SelectOptions;
    setLocale(locale: Alpha2): iCountries;
}
export default Countries;
