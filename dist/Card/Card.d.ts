import { FC } from "react";
import { CardProps } from "./Card.types";
import "./Card.scss";
/**
 *    @class Card
 *    @descriptiom Flippable information card.
 *
 *    User can define # of columns at certain screen thresholds, as
 *    well as the width of the thresholds themselves.
 *
 *    Card will leave room for # of other cards within parent that are
 *    defined in the # of columns at the current screen width.
 *
 *    Can flip or perform other behaviors on click.
 */
declare const Card: FC<CardProps>;
export default Card;
