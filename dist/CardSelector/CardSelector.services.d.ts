declare const cards: ({
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
declare const card: {
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
declare const options: {
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
export { cards, card, options };
