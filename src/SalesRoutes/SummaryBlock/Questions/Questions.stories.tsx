// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import Questions from "./Questions";
import { QuestionsProps } from './Questions.types';

export default {
  title: "Questions",
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: Questions
  },
};

export const QuestionsStory = (args: QuestionsProps): JSX.Element => {
  const { id, title, questions } = args;

  return <Questions id={id} title={title} questions={questions} />;
};

const questions = [
  {
    id: '1',
    question: 'Nom',
    answer: 'Dupond'
  },
  {
    id: '2',
    question: 'Prenom',
    answer: 'Jean'
  }
]
QuestionsStory.args = { id: '1', title: 'Block Title', questions };
