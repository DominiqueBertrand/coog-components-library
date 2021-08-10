// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.
/* eslint-disable @typescript-eslint/no-explicit-any */
/* Shared Types */

export type xAlignment = "left" | "center" | "right";
export type yAlignment = "top" | "center" | "bottom";
export enum Themes {
    red='red',
    blue='blue',
    green='green',
    yellow='yellow',
    orange='orange',
    purple='purple',
    black='black',
    grey='grey',
    white='white',
    redSolid='red-solid',
    blueSolid='blue-solid',
    greenSolid='green-solid',
    yellowSolid='yellow-solid',
    orangeSolid='orange-solid',
    purpleSolid='purple-solid',
} 

export interface CardProps {
    //Id/Key
    id?: any;                             //User-supplied Id for card, will be used as key for iteration (otherwise index)
  
    //Titles
    title?: any;                          //The title of the card, front and back (can be JSX/TSX)
    titleFront?: any;                     //The title of the card, front (can be JSX/TSX, overrides title)
    titleBack?: any;                      //The title of the card, back (can be JSX/TSX, overrides title)
  
    //Color
    theme?: Themes;                       //The global theme of the card, default 'blue'
    titleTextColor?: string;              //The color of the title text, default 'white'
    contentTextColor?: string;            //The color of the content text, default 'black'
    primaryColor?: string;                //The primary color of the card (header, border, hover color), default 'black'
    secondaryColor?: string;              //The secondary color of the card (content), default 'white'
  
    //Format
    margin?: number | string;             //Space between this card and others elements on the page, default 15
    width?: number | string;              //Specific width of the card (CSS style)
    maxWidth?: number | string;           //Maximum width of the card (CSS style)
    height?: number | string;             //Height of the card, default 200
    contentPadding?: number | string;     //Padding for content, default 15
    fontFamily?: string;                  //Font-family for card
  
    //Flipping
    isFlippable?: boolean;                //Can this card be flipped, default true
    isFlipped?: boolean;                  //Is this card currently flipped, default false
    allowFlipOnAnchor?: boolean;          //Should the card flip when an anchor tag is clicked, default false
    flipSeconds?: number;                 //The length of the flipping animation, default .75
  
    //Content
    front?: any;                          //What appears on the front of the card, can be text or JSX/TSX
    back?: any;                           //What appears on the back of the card, can be text or JSX/TSX
  
    //Title & Content Alignment
    xAlignment?: xAlignment;              //How everything on the card should be aligned horizontally (fall back), default 'left'
    yAlignment?: yAlignment;              //How everything on the card should be aligned vertically (fall back), default 'top'                         
    titleXAlignment?: xAlignment;         //How the title should be aligned horizontally (overriden by side-specific), default 'left'
    titleYAlignment?: yAlignment;         //How the title should be aligned vertically (overriden by side-specific), default 'top'
    titleFrontXAlignment?: xAlignment;    //How the front title should be aligned horizontally, default 'left'
    titleFrontYAlignment?: yAlignment;    //How the front title should be aligned vertically, default 'top'
    titleBackXAlignment?: xAlignment;     //How the back title should be aligned horizontally, default 'left'
    titleBackYAlignment?: yAlignment;     //How the back title should be aligned vertically, default 'top'
    contentXAlignment?: xAlignment;       //How the content should be aligned horizontally (overridden by side-specific), default 'left'
    contentYAlignment?: yAlignment;       //How the content should be aligned vertically (overridden by side-specific), default 'top'
    contentFrontXAlignment?: xAlignment;  //How the front content should be aligned horizontally, default 'left'
    contentFrontYAlignment?: yAlignment;  //How the front content should be aligned vertically, default 'top'
    contentBackXAlignment?: xAlignment;   //How the back content should be aligned horizontally, default 'left'
    contentBackYAlignment?: yAlignment;   //How the back content should be aligned vertically, default 'top'
  
    //Column Layout
    xlColumns?: number;                   //# of columns at xlSize screen width (px), all default 1
    lgColumns?: number;                   //# cols @ lgSize
    mdColumns?: number;                   //# cols @ mdSize
    smColumns?: number;                   //# cols @ smSize
    xsColumns?: number;                   //# cols @ xsSize
    xlSize?: number;                      //Minimum window size (px) for # xlColumns, default 1200
    lgSize?: number;                      //Size for lgColumns, default 1000
    mdSize?: number;                      //Size for mdColumns, default 800
    smSize?: number;                      //Size for smColumns, default 600
    xsSize?: number;                       //Size for xsColumns, default 0
  
    //Event Handlers
    onClick?: (e?: React.MouseEvent<HTMLElement>) => any;   //Additional behavior that should occur when the card is clicked
    
    frontActions?: JSX.Element;
}
  
/* State Interfaces */
export interface CardState {
    flipped: boolean;   //Is the card currently flipped, default false
    isHovered: boolean; //Is the card currently hovered over, default false
    windowSize: number; //The current window size to use for determining width in column layout
}

/* Style Interfaces */
  
export interface CardStyles {
    container: React.CSSProperties;
    card: React.CSSProperties;
    cardFlipped: React.CSSProperties;
    title: React.CSSProperties;
    front: React.CSSProperties;
    back: React.CSSProperties;
    content: React.CSSProperties;
}
