// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

// import countryList from "react-select-country-list";
import CountryList, { Alpha2, SelectOptions } from './CountryList';

import { getSelectedOption } from '../utils';
import { FormikField, Field } from '../Select/Select.types';

// const options = countryList().getData();
const countryList = new CountryList(Alpha2.fr);

/**
 * getInitialValue
 * @param defaultValue {string}
 * @returns 
 */
 const getInitialValue = (field: FormikField, locale: Alpha2 = Alpha2.fr, isMulti = false): Field | Array<Field> => {
    let initialValue: string | string[] = undefined;
    if (Array.isArray(field)) {
        initialValue = field.map( ({value}) => value);
    } else {
        initialValue = field?.value;
    }
    const options = getOptions(locale);
    return  getSelectedOption({value: initialValue, isMulti, options});
}
/**
 * getInitialValue
 * @param defaultValue {string}
 * @returns 
 */
 const getLocalValue = (field: Field | Field[], locale: Alpha2 = Alpha2.fr, isMulti = false): Field | Array<Field> => {
    let initialValue: string | string[] = isMulti ? [] : undefined;
    if (Array.isArray(field)) {
        initialValue = field.map( ({value}) => value);
    } else {
        initialValue = field?.value;
    }
    const options = getOptions(locale);
    const selectedOption = getSelectedOption({value: initialValue, isMulti, options})
    return selectedOption;
}

/**
 * getInitialValue
 * @param defaultValue {string}
 * @returns 
 */
const getOptions = (locale: Alpha2 = Alpha2.fr): SelectOptions => {
    if ( countryList.locale !== locale ) {
        return countryList.setLocale(locale).getSelectOptions();
    }
    return  countryList.getSelectOptions();
}

export {
    getInitialValue,
    getOptions,
    getLocalValue,
}