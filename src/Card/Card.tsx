// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React, { FC, useState, useEffect } from "react";
import cn from 'classnames';
import ReactMarkdown from 'react-markdown';

import { CardProps, CardStyles } from "./Card.types";
import { sharedStyleFlex, getXJustification, getYAlignment } from './Card.utils';

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
const Card: FC<CardProps> = ({
    //Id/Key
    id,                        //User-supplied Id for card, will be used as key for iteration (otherwise index)

    //Titles
    title,                      //The title of the card, front and back (can be JSX/TSX)
    titleFront,                 //The title of the card, front (can be JSX/TSX, overrides title)
    titleBack,                  //The title of the card, back (can be JSX/TSX, overrides title)
    theme,                      //The global theme of the card, default 'blue'

    //Format
    width,                      //Specific width of the card (CSS style)
    maxWidth,                   //Maximum width of the card (CSS style)
    height = 200,               //Height of the card, default 200
    fontFamily = 'inherit',     //Font-family for card

    //Flipping
    isFlippable = true,         //Can this card be flipped, default true
    isFlipped = false,          //Is this card currently flipped, default false
    allowFlipOnAnchor = false,  //Should the card flip when an anchor tag is clicked, default false
    flipSeconds = .75,          //The length of the flipping animation, default .75

    //Content
    front,                //What appears on the front of the card, can be text or JSX/TSX
    back,                 //What appears on the back of the card, can be text or JSX/TSX

    // Title & Content Alignment
    xAlignment,                 //How everything on the card should be aligned horizontally (fall back), default 'left'
    yAlignment,                 //How everything on the card should be aligned vertically (fall back), default 'top'                         
    titleXAlignment,            //How the title should be aligned horizontally (overriden by side-specific), default 'left'
    titleYAlignment,            //How the title should be aligned vertically (overriden by side-specific), default 'top'
    titleFrontXAlignment,       //How the front title should be aligned horizontally, default 'left'
    titleFrontYAlignment,       //How the front title should be aligned vertically, default 'top'
    titleBackXAlignment,        //How the back title should be aligned horizontally, default 'left'
    titleBackYAlignment,        //How the back title should be aligned vertically, default 'top'
    contentXAlignment,          //How the content should be aligned horizontally (overridden by side-specific), default 'left'
    contentYAlignment,          //How the content should be aligned vertically (overridden by side-specific), default 'top'
    contentFrontXAlignment,     //How the front content should be aligned horizontally, default 'left'
    contentFrontYAlignment,     //How the front content should be aligned vertically, default 'top'
    contentBackXAlignment,      //How the back content should be aligned horizontally, default 'left'
    contentBackYAlignment,      //How the back content should be aligned vertically, default 'top'

    // Column Layout
    xlColumns,                   //# of columns at xlSize screen width (px), all default 1
    lgColumns,                   //# cols @ lgSize
    mdColumns,                   //# cols @ mdSize
    smColumns,                   //# cols @ smSize
    xsColumns,                   //# cols @ xsSize
    xlSize,                      //Minimum window size (px) for # xlColumns, default 1200
    lgSize,                      //Size for lgColumns, default 1000
    mdSize,                      //Size for mdColumns, default 800
    smSize,                      //Size for smColumns, default 600
    xsSize,                      //Size for xsColumns, default 0

    // Event Handlers
    onClick,   // Additional behavior that should occur when the card is clicked
    frontActions,
}: CardProps): JSX.Element => {
    const [flipped, setFlipped] = useState(isFlipped);
    const [isHovered, setIsHovered] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [numberOfColumns, setNumberOfColumns] = useState(undefined);

    /* Handlers */
    //Flip the card if allowed, call any user-defined behavior
    const _onClick = (e: any) => {
        //Flip the card if allowed
        //Card must be flippable and the click target must not be an anchor or has the option to allow for anchor flips
        if (isFlippable && (allowFlipOnAnchor || e.target.tagName.toLowerCase() !== "a")) setFlipped(!flipped);

        //If the user passed on onClick handler, call it
        if (onClick) onClick();
    }


    /* Calculate Columns */
    //Determine how many columns we want to show at each threshold, default is 1
    //Use the largest defined value we can find at each window size
    const _xsColumns = xsColumns || 1;
    const _smColumns = smColumns || _xsColumns;
    const _mdColumns = mdColumns || _smColumns;
    const _lgColumns = lgColumns || _mdColumns;
    const _xlColumns = xlColumns || _lgColumns;

    /* Lifecycle */
    //Add a listener that updates the window size in the card's state on resize
    useEffect(() => {
        //Add a listener that updates the window size in the card's state on resize
        window.addEventListener('resize', _updateWidowSize);

        setNumberOfColumns(_getNumberOfColumns());

        // Returned function will be called on component unmount 
        // Remove the window resize listener on unload
        return () => {
            window.removeEventListener('resize', _updateWidowSize);
        }
    }, [])

    /* Helpers */
    //Switch the hovered state of the card to its opposite
    const _switchHover = (hovered: boolean) => setIsHovered(hovered);

    //Set the window size in the card's state so we can resize if necessary
    const _updateWidowSize = () => setWindowSize(window.innerWidth);

    //Get the number of columns the user wants based on the current window size
    const _getNumberOfColumns = () =>
        Math.abs(windowSize >= (xlSize || 1200)
            ? _xlColumns
            : windowSize >= (lgSize || 1000)
                ? _lgColumns
                : windowSize >= (lgSize || 800)
                    ? _mdColumns
                    : windowSize >= (lgSize || 600)
                        ? _smColumns
                        : _xsColumns);

    /* Styles */
    const _sharedStyleFrontBack: React.CSSProperties = {
        ...sharedStyleFlex,
    }

    const _style: CardStyles = {
        container: {
            width: width,
        },
        card: {
            fontFamily: fontFamily,
            height: height,
            transition: `${flipSeconds}s`,
        },
        //Card flip animation based off of solution from the following blog: https://davidwalsh.name/css-flip
        cardFlipped: {
            transform: 'rotateY(-180deg)'
        },
        title: {
            ...sharedStyleFlex,
            justifyContent: getXJustification(titleXAlignment),
        },
        front: {
            ...sharedStyleFlex,
            ..._sharedStyleFrontBack,
            transform: 'rotateY(0deg)',
        },
        back: {
            ..._sharedStyleFrontBack,
            transform: 'rotateY(180deg)'
        },
        content: {
            ...sharedStyleFlex,
        }
    };

    //Split the cards into columns
    const containerWidth = width || `${100 / numberOfColumns}%`;

    return (
        <div
            key={id}
            className={cn("card-100e8588-9faf-4d82-ae66-a516a9bbcede", theme)}
            style={{ ..._style.container, width: containerWidth }}
            onClick={_onClick} //Run flip animation (if allowed) and user-defined click actions
            onMouseEnter={() => _switchHover(true)} //Add hover state
            onMouseLeave={() => _switchHover(false)} //Remove hover state
        >
            <div className="card-wrapper"
                style=
                {
                    {
                        ..._style.card,
                        ...(  //Apply styles if the card is being flipped
                            flipped
                                ? _style.cardFlipped
                                : {}
                        )
                    }
                }
            >
                <div className="front" style={_style.front}>
                    {
                        titleFront || title
                            ? <div className="title"
                                style=
                                {
                                    {
                                        ..._style.title,
                                        alignItems: getYAlignment(yAlignment || titleFrontYAlignment || titleYAlignment),
                                        justifyContent: getXJustification(xAlignment || titleFrontXAlignment || titleXAlignment)
                                    }
                                }
                            >
                                <ReactMarkdown className="markdown">{titleFront || title}</ReactMarkdown>
                            </div>
                            : <></>
                    }
                    <div className="content" style=
                        {
                            {
                                ..._style.content,
                                alignItems: getYAlignment(yAlignment || contentFrontYAlignment || contentYAlignment),
                                justifyContent: getXJustification(xAlignment || contentFrontXAlignment || contentXAlignment)
                            }
                        }
                    >
                        {front ? (<ReactMarkdown className="markdown">{front}</ReactMarkdown>) : <></>}
                    </div>
                    {frontActions ? <div className="actions">{frontActions}</div> : <></>}
                </div>
                <div className="back" style={_style.back}>
                    {
                        titleBack || title
                            ? <div className="title" style=
                                {
                                    {
                                        ..._style.title,
                                        alignItems: getYAlignment(yAlignment || titleBackYAlignment || titleYAlignment),
                                        justifyContent: getXJustification(xAlignment || titleBackXAlignment || titleXAlignment)
                                    }
                                }
                            >
                                {titleBack || title ? (<ReactMarkdown className="markdown">{titleBack || title}</ReactMarkdown>) : <></>}
                            </div>
                            : <></>}
                    <div className="content" style=
                        {
                            {
                                ..._style.content,
                                alignItems: getYAlignment(yAlignment || contentBackYAlignment || contentYAlignment),
                                justifyContent: getXJustification(xAlignment || contentBackXAlignment || contentXAlignment)
                            }
                        }
                    >
                        {back ? (<ReactMarkdown className="markdown">{back}</ReactMarkdown>) : <></>}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Card;

