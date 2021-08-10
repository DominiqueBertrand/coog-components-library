// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import { QuestionProps } from "./Question.types";

import Markdown from '../../../Markdown';

import "./Question.scss";

const Question = ({ id, question, answer, separator = undefined }: QuestionProps): JSX.Element => (
    <div data-testid="Question" key={id} className="grid-question-6a9-064f417-50f4-00f8-4e7b">
        {question && <span className="question">{question}</span>}
        {separator && <span className="separator">{separator}</span>}
        {answer && <Markdown className="answer" string={answer}/>}
    </div>
);

export default Question;

