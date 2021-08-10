// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { Alpha2 } from "./CountryList";

import CountrySelector from "./CountrySelector";
import { CountrySelectorProps } from './CountrySelector.types';

export default {
  title: "CountrySelector",
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: CountrySelector,
  },
};

export const CountrySelectorStory = (args: CountrySelectorProps): JSX.Element => {
  const { field, isMulti, locale } = args;
  const eventEmitter = (ref: number | string, actionMeta: any) => console.log(`eventEmitter::id=${ref}:actionMeta=${JSON.stringify(actionMeta)}`);

  return <CountrySelector eventEmitter={eventEmitter} field={field} isMulti={isMulti} locale={locale} />;
};
CountrySelectorStory.args = { field: { name: "country_selector", value: "FR" }, locale: Alpha2.de };
