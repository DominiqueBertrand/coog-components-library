// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import Card from "./Card";
import { CardProps } from './Card.types';
import { card } from './Card.services';

export default {
  title: "Card",
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: Card,
  },
};

export const CardStory = (args: CardProps): JSX.Element => {
  const { titleFront, front, back, frontActions, ...props } = args;

  return <Card titleFront={titleFront} front={front} back={back} frontActions={frontActions} {...props} />;
};
CardStory.args = card;
