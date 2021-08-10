// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import { DescriptionProps } from "./Description.types";

/**
 * @class
 * Description Group Component
 * @param {string} Description title of Group
 */
const Group = ({ description }: DescriptionProps): JSX.Element => (description ? <span className="descrition">{description}</span> : <></>);

export default Group;
