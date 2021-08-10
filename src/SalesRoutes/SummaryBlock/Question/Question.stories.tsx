// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import Question from "./Question";
import { QuestionProps } from './Question.types';

export default {
  title: "Question",
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: Question,
  },
};

export const QuestionStory = (args: QuestionProps): JSX.Element => {
  const { id, question, answer, separator } = args;

  return <Question id={id} question={question} answer={answer} separator={separator} />;
};
QuestionStory.args = { id: '1', question: 'Nom', answer: 'Dupond' };
