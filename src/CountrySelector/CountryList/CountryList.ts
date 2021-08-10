// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import { iCountries, Alpha2, SelectOptions } from './CountryList.types'; 
import { localeCountries } from './langs';

/**
 * CountryList
 */
class Countries implements iCountries {
  locale = Alpha2.fr;
  localeCountriesList = localeCountries;
  countries = this.localeCountriesList?.[this.locale]?.countries;
  Alpha2 = Alpha2;

  constructor( locale:Alpha2 ) {
    this.setLocale(locale);
  }

  getSelectOptions(): SelectOptions {
    const options = Object.keys(this.countries)?.map(
       key => ({ value: key, label: this.countries?.[key]})
    );
    return options;
  }

  setLocale(locale:Alpha2): iCountries {
    this.locale = locale
    this.countries = this.localeCountriesList?.[locale]?.countries;

    return this;
  }
  
}

export default Countries;