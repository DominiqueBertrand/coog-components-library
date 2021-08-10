import { QuestionProps } from './Question.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: ({ id, question, answer, separator }: QuestionProps) => JSX.Element;
    };
};
export default _default;
export declare const QuestionStory: {
    (args: QuestionProps): JSX.Element;
    args: {
        id: string;
        question: string;
        answer: string;
    };
};
