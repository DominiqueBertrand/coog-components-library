// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.
import { map } from 'lodash-es';

import { getSelectedOption } from '../utils';
import { Field, FormikField, FormikOptions, SelectOptions } from './Select.types';

/**
 * options of select
 */
  const options = [
    {
      value: 'choix_0',
      name: 'Choix 0',
    },
    {
      value: 'choix_1',
      name: 'Choix 1',
    },
    {
      value: 'choix_2',
      name: 'Choix 2',
    },
    {
      value: 'choix_3',
      name: 'Choix 3',
    },
  ];
  
/**
 * selected option of select
 */
const selectedField = {
name: 'name_select_composite',
value: 'choix_2',
};

/**
 * get options
 * @param {*} param0
 */
 const getOptions = (options: FormikOptions): SelectOptions => map(options, option => ({ value: option?.value, label: option?.name }));

/**
 * getInitialValue
 * @param defaultValue {string}
 * @returns 
 */
 const getInitialValue = (field: FormikField, isMulti = false, options: FormikOptions): Field | Array<Field> => {
  let initialValue: string | string[] = undefined;
  if (Array.isArray(field)) {
      initialValue = field.map( ({value}) => value);
  } else {
      initialValue = field?.value;
  }
  const selectOptions = getOptions(options);
  return  getSelectedOption({value: initialValue, isMulti, options: selectOptions});
}


export {
    options,
    selectedField,
    getInitialValue,
    getOptions,
}