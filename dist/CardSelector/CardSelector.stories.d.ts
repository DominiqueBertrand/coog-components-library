import { CardSelectorProps } from './CardSelector.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: ({ cards, cardsXAlign, cardsYAlign, ...props }: CardSelectorProps) => JSX.Element;
    };
};
export default _default;
export declare const CardSelectorStory: {
    (args: CardSelectorProps): JSX.Element;
    args: {
        lgColumns: number;
        mdColumns: number;
        smColumn: number;
        cards: ({
            titleFront: string;
            front: string;
            back: string;
            frontActions: JSX.Element;
            theme?: undefined;
        } | {
            titleFront: string;
            front: string;
            back: string;
            theme: string;
            frontActions?: undefined;
        })[];
    };
};
