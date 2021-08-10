// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import InputField from "./InputField";
import { InputFieldProps } from './InputField.types';

export default {
  title: "InputField",
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: InputField,
  },
};

export const InputFieldStory = (args: InputFieldProps): JSX.Element => {
  const { name, type, placeholder } = args;

  return <InputField name={name} type={type} placeholder={placeholder} />;
};
InputFieldStory.args = { name: 'Name', type: 'text', placeholder: 'Name' };
