import { FormikField } from '../Select/Select.types';
import { Alpha2 } from './CountryList/CountryList.types';
interface EventEmitter {
    (id: number | string | Array<number | string>, actionMeta?: any): void;
}
export interface CountrySelectorProps {
    eventEmitter: EventEmitter;
    field?: FormikField;
    isMulti?: boolean;
    locale?: Alpha2;
}
export {};
