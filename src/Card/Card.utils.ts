// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import { xAlignment, yAlignment } from "./Card.types";

/* Shared Constants */
//Box-sizing-related shared styles
export const sharedStyleBoxSizing: React.CSSProperties = {
    boxSizing: 'border-box'
  };
  
  //Flex-related shared styles
  export  const sharedStyleFlex: React.CSSProperties = {
    display: 'flex',
    msFlex: 'flex',
    WebkitFlex: 'flex'
  };
  
  /* Shared Helpers */
  //Get the alignment CSS styles based on user-defined horizontal values
  export const getXJustification = (justification: xAlignment | undefined): string => 
  justification === 'center' ? 'center'
      : justification === 'right'
        ? 'flex-end'
        : 'flex-start'; //Default, i.e. 'left'
  
  //Get the alignment CSS styles based on user-defined vertical values
  export const getYAlignment = (alignment: yAlignment | undefined): string =>  
    alignment === 'center'
      ? 'center'
      : alignment === 'bottom'
        ? 'flex-end'
        : 'flex-start'; //Default, i.e. 'top'
