import { SummaryBlockProps } from './SummaryBlock.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: ({ list, id, groups }: SummaryBlockProps) => JSX.Element;
    };
};
export default _default;
export declare const SummaryBlockStoryList: {
    (args: SummaryBlockProps): JSX.Element;
    args: {
        list: {
            id: string;
            title: string;
            questions: {
                id: string;
                question: string;
                answer: string;
            }[];
        }[];
    };
};
export declare const SummaryBlockStoryGroup: {
    (args: SummaryBlockProps): JSX.Element;
    args: {
        groups: {
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
            sequence: number;
        }[];
    };
};
