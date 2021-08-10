// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React, { FC, useState, useEffect } from 'react';
import Select from 'react-select';

import { CountrySelectorProps } from './CountrySelector.types';
import { Field } from '../Select/Select.types';
import { getOptions, getInitialValue, getLocalValue } from './CountrySelector.service';
import { getSelectedValue } from '../utils';

import './CountrySelector.scss';
import { Alpha2 } from './CountryList';

/**
 * @description CountrySelector - made for Formik
 * @param {function} eventEmitter
 * @param {FormikField} field
 * @param {booelan} isMulti - optionnal / default false 
 * @returns CountrySelector component
 */
const CountrySelector: FC<CountrySelectorProps> = ({ eventEmitter, field, isMulti = false, locale = Alpha2.fr }: CountrySelectorProps): JSX.Element => {
    const [localValue, setLocalValue] = useState(getInitialValue(field, locale, isMulti));
    const [localOptions, setLocalOptions] = useState(getOptions(locale));
    const [localLocale, setLocalLocale] = useState(locale);

    const changeHandler = (selectedOption: Field, actionMeta: Record<string, string>) => {
        const value = getSelectedValue({ value: selectedOption, isMulti })
        setLocalValue(selectedOption);
        eventEmitter(value, actionMeta);
    };

    useEffect(() => {
        // handle change locale
        if (locale !== localLocale) {
            setLocalValue(getLocalValue(localValue, locale, isMulti));
            setLocalLocale(locale);
            setLocalOptions(getOptions(locale));
        }
    })

    return (
        <div data-testid="CountrySelector" className="country-selector-6a9-064f417-50f4-00f8-4e7b">
            <Select
                className='country-selector'
                options={localOptions}
                value={localValue}
                onChange={changeHandler}
                isMulti={isMulti}
            />
        </div>
    );
};

export default CountrySelector;

