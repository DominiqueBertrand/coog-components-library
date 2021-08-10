import { QuestionsProps } from './Questions.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: ({ id, title, questions }: QuestionsProps) => JSX.Element;
    };
};
export default _default;
export declare const QuestionsStory: {
    (args: QuestionsProps): JSX.Element;
    args: {
        id: string;
        title: string;
        questions: {
            id: string;
            question: string;
            answer: string;
        }[];
    };
};
