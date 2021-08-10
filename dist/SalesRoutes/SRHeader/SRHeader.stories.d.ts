import { SRHeaderProps } from './SRHeader.types';
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: ({ title, buttons, eventEmitter, status }: SRHeaderProps) => JSX.Element;
        subcomponents: {
            Button: ({ id, label, type, eventEmitter, disabled }: import("../../Button/Button.types").ButtonProps) => JSX.Element;
        };
    };
    argTypes: {
        status: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const Header: {
    (args: SRHeaderProps): JSX.Element;
    args: {
        title: string;
        buttons: {
            id: number;
            label: string;
            type: string;
            disabled: boolean;
        }[];
        status: string;
        eventEmitter: (id: number) => void;
    };
};
