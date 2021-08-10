// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { map, get } from 'lodash-es';

import { QuestionsProps } from "./Questions.types";

import Question from '../Question';
import { QuestionProps } from '../Question/Question.types';

import "./Questions.scss";

const Questions = ({ id, title, questions }: QuestionsProps): JSX.Element => (
    <div data-testid="List" key={id} className="grid-card-6a9-064f417-50f4-00f8-4e7b">
        <span className="title">{title}</span>
        {map(questions, (question: QuestionProps) => (
            <Question
                key={get(question, 'id')}
                id={get(question, 'id')}
                question={get(question, 'question')}
                answer={get(question, 'answer')}
                separator={get(question, 'separator')}
            />
        ))}
    </div>
);

export default Questions;

