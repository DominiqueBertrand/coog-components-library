import { GroupProps } from './Group.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: ({ id, title, description, tooltip, sequence, questions }: GroupProps) => JSX.Element;
    };
};
export default _default;
export declare const GroupStory: {
    (args: GroupProps): JSX.Element;
    args: {
        questions: {
            id: string;
            title: string;
            questions: {
                id: string;
                question: string;
                answer: string;
            }[];
        }[];
        title: string;
    };
};
