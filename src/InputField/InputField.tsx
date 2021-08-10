// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React, { FunctionComponent } from 'react';
import { useField } from 'formik';

import { InputFieldProps } from "./InputField.types";

import "./InputField.scss";

const InputField: FunctionComponent<InputFieldProps> = (props: InputFieldProps) => {
    const [
        field,
        { error, touched },
    ] = useField({
        name: props.name,
        type: props.type,
    });
    return (
        <div data-testid="InputField" className={`field-${props.type}`}>
            <input {...field} {...props} />
            {error && touched && <div className='error'>{error}</div>}
        </div>
    );
};

export default InputField;