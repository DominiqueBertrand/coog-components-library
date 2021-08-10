import { Field, FormikField, FormikOptions, SelectOptions } from './Select.types';
/**
 * options of select
 */
declare const options: {
    value: string;
    name: string;
}[];
/**
 * selected option of select
 */
declare const selectedField: {
    name: string;
    value: string;
};
/**
 * get options
 * @param {*} param0
 */
declare const getOptions: (options: FormikOptions) => SelectOptions;
/**
 * getInitialValue
 * @param defaultValue {string}
 * @returns
 */
declare const getInitialValue: (field: FormikField, isMulti: boolean, options: FormikOptions) => Field | Array<Field>;
export { options, selectedField, getInitialValue, getOptions, };
