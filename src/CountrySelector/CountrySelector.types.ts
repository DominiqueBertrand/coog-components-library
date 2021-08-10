// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import { FormikField } from '../Select/Select.types';
import { Alpha2 } from './CountryList/CountryList.types';
interface EventEmitter {
    ( id: number | string | Array<number | string>, actionMeta?: any) : void;
}
export interface CountrySelectorProps {
    eventEmitter: EventEmitter;
    field?: FormikField;
    isMulti?: boolean;
    locale?: Alpha2;
}
