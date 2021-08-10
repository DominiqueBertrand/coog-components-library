/// <reference types="react" />
import { CardProps } from "../Card/Card.types";
declare type xAlignment = "left" | "center" | "right";
declare type yAlignment = "top" | "center" | "bottom";
export interface CardSelectorProps extends CardProps {
    cards: CardProps[];
    cardsXAlign?: xAlignment;
    cardsYAlign?: yAlignment;
}
export interface CardSelectorStyles {
    container: React.CSSProperties;
}
export {};
