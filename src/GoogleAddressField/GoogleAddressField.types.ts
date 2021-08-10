// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

export type Field = {
    name: string;
    value: any;
}

export interface GoogleAddressFieldProps {
    apiKey: string;
    language?: string;
    region?: string;
    eventEmitter: (id: number | string, actionMeta?: any) => void;
    field?: Field;
    // Defines a minimum number of characters needed on the input in order to make requests to the Google's API.
    minLengthAutocomplete?: number; 
    // The number of milliseconds to delay before making a call to Google Maps API.
    debounce?: number; 
}
