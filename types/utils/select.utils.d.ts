import { Field, SelectOptions } from '../Select/Select.types';
interface SelectedOptionProps {
    value: string | Array<string>;
    isMulti: boolean;
    options: SelectOptions;
}
interface SelectedValueProps {
    value: Field | Array<Field>;
    isMulti: boolean;
}
/**
 * get select value from options
 * @param {string | Array{string}} value
 * @param {boolean} isMulti
 * @param {Array<Record<string, any>>} options
 *
 * @return Option Selected option
 */
declare const getSelectedOption: ({ value, isMulti, options }: SelectedOptionProps) => Field | Array<Field>;
declare const getSelectedValue: ({ value, isMulti }: SelectedValueProps) => string | Array<string>;
export { getSelectedOption, getSelectedValue };
