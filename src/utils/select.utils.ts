import { filter, find, get, size, map } from 'lodash-es';

import { checkIsNull } from './commons.utils';
import { Field, SelectOptions, SelectOption } from '../Select/Select.types';

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
const getSelectedOption = ({ value, isMulti, options }: SelectedOptionProps): Field | Array<Field>  => {
    let result = isMulti ? [] : undefined;
    try {
      if (size(options) > 0 && !checkIsNull(value)) {
        if (isMulti) {
          const indexOfValue = (option: SelectOption) => value.indexOf(get(option, 'value'));
          result = filter(options, (option: SelectOption) => indexOfValue(option) >= 0);
        } else {
          result = find(options, ['value', value]);
        }
      }
      return result;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`getValue: ${e}`);
      return result;
    }
  };

  const getSelectedValue = ({value, isMulti}: SelectedValueProps): string | Array<string> => {
    const fieldValue = isMulti ? map(value, option => get(option, 'value')) : get(value, 'value');
    //
    return fieldValue;
  }

  export {
    getSelectedOption,
    getSelectedValue
  }