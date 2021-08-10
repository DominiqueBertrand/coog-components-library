import React from 'react';
import { GoogleAddressFieldProps } from './GoogleAddressField.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: React.FC<GoogleAddressFieldProps>;
    };
    argTypes: {
        region: {
            control: {
                type: string;
                options: string[];
            };
        };
        language: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const GoogleAdressFieldStory: {
    (args: GoogleAddressFieldProps): JSX.Element;
    args: {
        apiKey: string;
        field: {
            label: string;
            value: {
                description: string;
                matched_substrings: {
                    length: number;
                    offset: number;
                }[];
                place_id: string;
                reference: string;
                structured_formatting: {
                    main_text: string;
                    main_text_matched_substrings: {
                        length: number;
                        offset: number;
                    }[];
                    secondary_text: string;
                };
                terms: {
                    offset: number;
                    value: string;
                }[];
                types: string[];
            };
        };
    };
};
