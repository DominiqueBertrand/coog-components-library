// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import Select from "./Select";
import { SelectProps } from './Select.types';
import { options, selectedField } from './Select.service';

export default {
  title: "Select",
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: Select,
  },
};

export const SelectStory = (args: SelectProps): JSX.Element => {
  const { field, isMulti, options } = args;
  const eventEmitter = (ref: number | string, actionMeta: any) => console.log(`eventEmitter::id=${ref}:actionMeta=${JSON.stringify(actionMeta)}`);


  return <Select eventEmitter={eventEmitter} field={field} isMulti={isMulti} options={options} />;
};
SelectStory.args = { field: selectedField, options };
