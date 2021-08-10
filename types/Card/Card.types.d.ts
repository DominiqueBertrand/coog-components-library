export declare type xAlignment = "left" | "center" | "right";
export declare type yAlignment = "top" | "center" | "bottom";
export declare enum Themes {
    red = "red",
    blue = "blue",
    green = "green",
    yellow = "yellow",
    orange = "orange",
    purple = "purple",
    black = "black",
    grey = "grey",
    white = "white",
    redSolid = "red-solid",
    blueSolid = "blue-solid",
    greenSolid = "green-solid",
    yellowSolid = "yellow-solid",
    orangeSolid = "orange-solid",
    purpleSolid = "purple-solid"
}
export interface CardProps {
    id?: any;
    title?: any;
    titleFront?: any;
    titleBack?: any;
    theme?: Themes;
    titleTextColor?: string;
    contentTextColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    margin?: number | string;
    width?: number | string;
    maxWidth?: number | string;
    height?: number | string;
    contentPadding?: number | string;
    fontFamily?: string;
    isFlippable?: boolean;
    isFlipped?: boolean;
    allowFlipOnAnchor?: boolean;
    flipSeconds?: number;
    front?: any;
    back?: any;
    xAlignment?: xAlignment;
    yAlignment?: yAlignment;
    titleXAlignment?: xAlignment;
    titleYAlignment?: yAlignment;
    titleFrontXAlignment?: xAlignment;
    titleFrontYAlignment?: yAlignment;
    titleBackXAlignment?: xAlignment;
    titleBackYAlignment?: yAlignment;
    contentXAlignment?: xAlignment;
    contentYAlignment?: yAlignment;
    contentFrontXAlignment?: xAlignment;
    contentFrontYAlignment?: yAlignment;
    contentBackXAlignment?: xAlignment;
    contentBackYAlignment?: yAlignment;
    xlColumns?: number;
    lgColumns?: number;
    mdColumns?: number;
    smColumns?: number;
    xsColumns?: number;
    xlSize?: number;
    lgSize?: number;
    mdSize?: number;
    smSize?: number;
    xsSize?: number;
    onClick?: (e?: React.MouseEvent<HTMLElement>) => any;
    frontActions?: JSX.Element;
}
export interface CardState {
    flipped: boolean;
    isHovered: boolean;
    windowSize: number;
}
export interface CardStyles {
    container: React.CSSProperties;
    card: React.CSSProperties;
    cardFlipped: React.CSSProperties;
    title: React.CSSProperties;
    front: React.CSSProperties;
    back: React.CSSProperties;
    content: React.CSSProperties;
}
