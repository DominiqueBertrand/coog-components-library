// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React, { FC, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { get } from 'lodash-es';

import { GoogleAddressFieldProps } from "./GoogleAddressField.types";

import "./GoogleAddressField.scss";

const GoogleAdressField: FC<GoogleAddressFieldProps> = ({ apiKey, language, region, eventEmitter, field, minLengthAutocomplete = 10, debounce = 0 }: GoogleAddressFieldProps): JSX.Element => {
    const [localValue, setLocalValue] = useState(field);

    const changeHandler = (selectedOption: any, actionMeta: any) => {
        const { value } = selectedOption;
        // console.group('Value Changed');
        // console.log(`value: ${JSON.stringify(selectedOption, null, 1)}`);
        // console.log(`value: ${JSON.stringify(value, null, 1)}`);
        // console.log(`action: ${actionMeta.action}`);
        // console.groupEnd();
        setLocalValue(selectedOption);
        eventEmitter(value, actionMeta);
    };

    return apiKey ?
        (
            <div data-testid="GoogleAdressField" className="google-address-field">
                <div className="country-selector" />
                <div className="address-selector">
                    <GooglePlacesAutocomplete
                        apiKey={apiKey}
                        apiOptions={{ language, region }}

                        selectProps={{
                            value: localValue,
                            onChange: changeHandler,
                        }}
                        minLengthAutocomplete={minLengthAutocomplete}
                        debounce={debounce}
                    /></div>
                {/* <div className="address-viewer">
                    <pre>
                        <code>{localValue ? JSON.stringify(localValue, null, 1) : ''}</code>
                    </pre>
                </div> */}
            </div >
        )
        : (
            <div data-testid="GoogleAdressField" className="google-address-field">No apiKey found</div>
        )

};

export default GoogleAdressField;