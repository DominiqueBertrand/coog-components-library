// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import { CardSelectorProps, CardSelectorStyles } from "./CardSelector.types";
import { sharedStyleFlex, getXJustification, getYAlignment, sharedStyleBoxSizing } from '../Card/Card.utils';
import Card from '../Card';

import "./CardSelector.scss";

/*
 *  CardSelector
 *    Container for cards.
 * 
 *    User can define # of columns at certain screen thresholds, as
 *    well as the width of the thresholds themselves.
 * 
 *    All card properties can be passed to the CardSelector, which will use
 *    those properties to render the cards, unless overridden by the
 *    card itself.
 */
const CardSelector = ({ cards, cardsXAlign, cardsYAlign, ...props }: CardSelectorProps): JSX.Element => {
    /* Styles */
    const _style: CardSelectorStyles = {
        container: {
            ...sharedStyleBoxSizing,
            ...sharedStyleFlex,
            alignItems: getYAlignment(cardsYAlign),
            justifyContent: getXJustification(cardsXAlign)
        }
    };
    return (
        <div className="card-selector-418d2f28-e939-4cfe-a1dd-120af9a78e72" style={_style.container}>
            {cards?.map((c, i) => (
                <Card
                    key={c.id || i} //Use Id or index in array for key
                    {...{
                        ...props, //Pass in all properties, which includes all properties available to Cards
                        ...c //Individual card properties passed in that can overwrite Cards defaults
                    }}
                />
            ))}
        </div>
    );
};

export default CardSelector;

