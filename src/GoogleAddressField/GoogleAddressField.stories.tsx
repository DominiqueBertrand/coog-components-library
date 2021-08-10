// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from 'react';
import GoogleAddressField from "./GoogleAddressField";

import { GoogleAddressFieldProps } from './GoogleAddressField.types';
import { field } from './GoogleAddressField.service';

export default {
  title: "GoogleAdressField",
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: GoogleAddressField,
  },
  argTypes: {
    region: {
      control: {
        type: 'select',
        options: ['fr', 'us', 'de', 'es'],
      },
    },
    language: {
      control: {
        type: 'select',
        options: ['fr', 'us', 'de', 'es'],
      },
    },
  },
};

export const GoogleAdressFieldStory = (args: GoogleAddressFieldProps): JSX.Element => {
  const { apiKey, field } = args;
  const eventEmitter = (ref: number | string, actionMeta: any) => console.log(`eventEmitter::id=${ref}:actionMeta=${JSON.stringify(actionMeta)}`);


  return <GoogleAddressField apiKey={apiKey} eventEmitter={eventEmitter} field={field} />;
};
GoogleAdressFieldStory.args = { apiKey: '', field };
