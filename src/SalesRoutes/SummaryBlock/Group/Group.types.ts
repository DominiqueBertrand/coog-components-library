// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.
import { QuestionsProps } from "../Questions/Questions.types";

export interface GroupProps {
    id?: string;
    title?: string;
    description?: string;
    tooltip?: string;
    sequence?: number;
    questions: Array<QuestionsProps>
}