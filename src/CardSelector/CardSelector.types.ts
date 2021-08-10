/* eslint-disable @typescript-eslint/no-explicit-any */
// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import { CardProps } from "../Card/Card.types";

/* Shared Types */
type xAlignment = "left" | "center" | "right";
type yAlignment = "top" | "center" | "bottom";

/* Property Interfaces */
export interface CardSelectorProps extends CardProps {
    cards: CardProps[];    //List of cards we want to show in the Cards
    cardsXAlign?: xAlignment; //How to align the cards in the Cards horizontally, default 'left'
    cardsYAlign?: yAlignment; //How to align the cards in the Cards vertically, default 'top'
}

/* Style Interfaces */
export interface CardSelectorStyles {
    container: React.CSSProperties;
}