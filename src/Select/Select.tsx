// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React, { FC, useState } from 'react';
import ReactSelect from 'react-select';

import { SelectProps } from './Select.types';
import { Field } from '../Select/Select.types';
import { getInitialValue, getOptions } from './Select.service';
import { getSelectedValue } from '../utils';

import './Select.scss';

/**
 * @description Select - made for Formik
 * @param {function} eventEmitter
 * @param {FormikField} field
 * @param {booelan} isMulti - optionnal / default false 
 * @returns Select component
 */
const Select: FC<SelectProps> = ({ eventEmitter, field, isMulti = false, options }: SelectProps): JSX.Element => {
    const [localValue, setLocalValue] = useState(getInitialValue(field, isMulti, options));
    const [localOptions, setLocalOptions] = useState(getOptions(options));

    const changeHandler = (selectedOption: Field, actionMeta: Record<string, string>) => {
        const value = getSelectedValue({ value: selectedOption, isMulti })
        setLocalValue(selectedOption);
        eventEmitter(value, actionMeta);
    };

    return (
        <div data-testid="Select" className="country-selector-6a9-064f417-50f4-00f8-4e7b">
            <ReactSelect
                className='country-selector'
                options={localOptions}
                value={localValue}
                onChange={changeHandler}
                isMulti={isMulti}
            />
        </div>
    );
};

export default Select;