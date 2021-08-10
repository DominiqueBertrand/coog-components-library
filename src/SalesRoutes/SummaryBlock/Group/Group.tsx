// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import { map, get } from 'lodash-es';

import { GroupProps } from "./Group.types";

import Questions from '../Questions';
import Title from './components/Title';
import Description from './components/Description';

import "./Group.scss";

/**
 * @class
 * Group Component
 * @param {GroupProps} lists of Questions
 */
const Group = ({ id, title, description, tooltip, sequence, questions = [] }: GroupProps): JSX.Element => (
    <div data-testid="Group" className="group-7cb82dbf-66ff-4e7b-a93a-1a11159a4a87">
        <Title title={title} />
        <Description description={description} />
        <div className="questions">
            {
                map(questions, question => (
                    <Questions
                        key={get(question, 'id')}
                        id={get(question, 'id')}
                        title={get(question, 'title')}
                        questions={get(question, 'questions')}
                    />
                ))}
        </div>
    </div>
);

export default Group;
