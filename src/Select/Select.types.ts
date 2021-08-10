// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.
export type SelectOption = {
    label: string | Array<string>;
    value: string | Record<string,string>;
};

export type SelectOptions = Array<SelectOption>;

export type FormikField = {
    name: string;
    value: string | Array<string>;
}
export type Field = {
    label: string;
    value: string;
}

export type FormikOptions = Array<FormikField>;

interface EventEmitter {
    ( id: number | string | Array<number | string>, actionMeta?: any) : void;
}

export interface SelectProps {
    options: FormikOptions;
    eventEmitter: EventEmitter;
    field?: FormikField;
    isMulti?: boolean;
}