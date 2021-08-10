import { QuestionProps } from '../Question/Question.types';
export interface QuestionsProps {
    id: string;
    title: string;
    questions: Array<QuestionProps>;
}
