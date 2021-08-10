import React from "react";
import { CardProps } from './Card.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: React.FC<CardProps>;
    };
};
export default _default;
export declare const CardStory: {
    (args: CardProps): JSX.Element;
    args: {
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
    };
};
