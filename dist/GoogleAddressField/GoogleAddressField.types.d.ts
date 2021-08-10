export declare type Field = {
    name: string;
    value: any;
};
export interface GoogleAddressFieldProps {
    apiKey: string;
    language?: string;
    region?: string;
    eventEmitter: (id: number | string, actionMeta?: any) => void;
    field?: Field;
    minLengthAutocomplete?: number;
    debounce?: number;
}
