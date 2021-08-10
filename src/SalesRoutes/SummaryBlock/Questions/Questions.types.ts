// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.
import { QuestionProps } from '../Question/Question.types';

export interface QuestionsProps {
    id: string;
    title: string;
    questions: Array<QuestionProps>;
}
