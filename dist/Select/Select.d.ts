import { FC } from 'react';
import { SelectProps } from './Select.types';
import './Select.scss';
/**
 * @description Select - made for Formik
 * @param {function} eventEmitter
 * @param {FormikField} field
 * @param {booelan} isMulti - optionnal / default false
 * @returns Select component
 */
declare const Select: FC<SelectProps>;
export default Select;
