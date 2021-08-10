// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { map, get } from 'lodash-es';

import { SummaryBlockProps } from "./SummaryBlock.types";

import Questions from './Questions';
import Group from './Group';

import "./SummaryBlock.scss";

/**
 * @class
 * SummaryBlock Component
 * @param {SummaryBlockProps} 
 *          list - list of Questions
 *          groups - groups of Questions list
 */
const SummaryBlock = ({ list = [], id, groups }: SummaryBlockProps): JSX.Element => (
    <div data-testid="SummaryBlock" className="summary-block-6a9-064f417-50f4-00f8-4e7b" id={id}>
        {groups ? (
            map(groups, (item, idx) => (
                <Group
                    key={get(item, 'id', idx)}
                    id={get(item, 'id')}
                    title={get(item, 'title')}
                    description={get(item, 'description')}
                    tooltip={get(item, 'tooltip')}
                    sequence={get(item, 'sequence')}
                    questions={get(item, 'questions')}
                />
            ))
        ) : (
            map(list, (item, idx) => (
                <Questions
                    key={get(item, 'id', idx)}
                    id={get(item, 'id')}
                    title={get(item, 'title')}
                    questions={get(item, 'questions')}
                />
            ))
        )}
    </div>
);

export default SummaryBlock;
