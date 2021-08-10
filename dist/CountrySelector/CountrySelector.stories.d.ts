import React from "react";
import { Alpha2 } from "./CountryList";
import { CountrySelectorProps } from './CountrySelector.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: React.FC<CountrySelectorProps>;
    };
};
export default _default;
export declare const CountrySelectorStory: {
    (args: CountrySelectorProps): JSX.Element;
    args: {
        field: {
            name: string;
            value: string;
        };
        locale: Alpha2;
    };
};
