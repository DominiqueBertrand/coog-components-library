// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import { TitleProps } from "./Title.types";

/**
 * @class
 * Title Group Component
 * @param {string} title title of Group
 */
const Group = ({ title }: TitleProps): JSX.Element => (title ? <span className="title">{title}</span> : <></>);

export default Group;
