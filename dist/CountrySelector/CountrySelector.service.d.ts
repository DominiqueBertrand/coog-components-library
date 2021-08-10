import { Alpha2, SelectOptions } from './CountryList';
import { FormikField, Field } from '../Select/Select.types';
/**
 * getInitialValue
 * @param defaultValue {string}
 * @returns
 */
declare const getInitialValue: (field: FormikField, locale?: Alpha2, isMulti?: boolean) => Field | Array<Field>;
/**
 * getInitialValue
 * @param defaultValue {string}
 * @returns
 */
declare const getLocalValue: (field: Field | Field[], locale?: Alpha2, isMulti?: boolean) => Field | Array<Field>;
/**
 * getInitialValue
 * @param defaultValue {string}
 * @returns
 */
declare const getOptions: (locale?: Alpha2) => SelectOptions;
export { getInitialValue, getOptions, getLocalValue, };
