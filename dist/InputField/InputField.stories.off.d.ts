import React from "react";
import { InputFieldProps } from './InputField.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: React.FunctionComponent<InputFieldProps>;
    };
};
export default _default;
export declare const InputFieldStory: {
    (args: InputFieldProps): JSX.Element;
    args: {
        name: string;
        type: string;
        placeholder: string;
    };
};
