import React from "react";
import { SelectProps } from './Select.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: React.FC<SelectProps>;
    };
};
export default _default;
export declare const SelectStory: {
    (args: SelectProps): JSX.Element;
    args: {
        field: {
            name: string;
            value: string;
        };
        options: {
            value: string;
            name: string;
        }[];
    };
};
