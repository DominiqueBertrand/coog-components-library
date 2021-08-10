import { MarkdownProps } from './Markdown.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: ({ strings, string, className, defaultValue }: MarkdownProps) => JSX.Element;
    };
};
export default _default;
export declare const MarkdownStory: {
    (args: MarkdownProps): JSX.Element;
    args: {
        string: string;
    };
};
