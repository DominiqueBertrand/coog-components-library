// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import CardSelector from "./CardSelector";
import { CardSelectorProps } from './CardSelector.types';
import { options } from './CardSelector.services';

export default {
  title: "CardSelector",
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: CardSelector,
  },
};

export const CardSelectorStory = (args: CardSelectorProps): JSX.Element => {
  const { cards, cardsYAlign, cardsXAlign, ...props } = args;

  return <CardSelector cards={cards} cardsYAlign={cardsYAlign} cardsXAlign={cardsXAlign} {...props} />;
};
CardSelectorStory.args = options;
