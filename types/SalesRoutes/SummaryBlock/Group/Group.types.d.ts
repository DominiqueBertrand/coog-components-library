import { QuestionsProps } from "../Questions/Questions.types";
export interface GroupProps {
    id?: string;
    title?: string;
    description?: string;
    tooltip?: string;
    sequence?: number;
    questions: Array<QuestionsProps>;
}
