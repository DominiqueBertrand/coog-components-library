export declare type SelectOption = {
    label: string | Array<string>;
    value: string | Record<string, string>;
};
export declare type SelectOptions = Array<SelectOption>;
export declare type FormikField = {
    name: string;
    value: string | Array<string>;
};
export declare type Field = {
    label: string;
    value: string;
};
export declare type FormikOptions = Array<FormikField>;
interface EventEmitter {
    (id: number | string | Array<number | string>, actionMeta?: any): void;
}
export interface SelectProps {
    options: FormikOptions;
    eventEmitter: EventEmitter;
    field?: FormikField;
    isMulti?: boolean;
}
export {};
