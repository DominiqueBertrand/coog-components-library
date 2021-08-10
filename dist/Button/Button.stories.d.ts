import { ButtonProps } from "./Button.types";
declare const _default: {
    title: string;
    parameters: {
        actions: {
            handles: string[];
        };
        component: ({ id, label, type, eventEmitter, disabled }: ButtonProps) => JSX.Element;
    };
    argTypes: {
        type: {
            control: {
                type: string;
                options: string[];
            };
        };
    };
};
export default _default;
export declare const ButtonWarning: {
    (args: ButtonProps): JSX.Element;
    args: {
        id: number;
        label: string;
        type: string;
        disabled: boolean;
    };
};
export declare const ButtonError: {
    (args: ButtonProps): JSX.Element;
    args: {
        id: number;
        label: string;
        type: string;
        disabled: boolean;
    };
};
export declare const ButtonPrimary: {
    (args: ButtonProps): JSX.Element;
    args: {
        id: number;
        label: string;
        type: string;
        disabled: boolean;
    };
};
export declare const ButtonDefault: {
    (args: ButtonProps): JSX.Element;
    args: {
        id: number;
        label: string;
        type: string;
        disabled: boolean;
    };
};
export declare const ButtonDisabled: {
    (args: ButtonProps): JSX.Element;
    args: {
        id: number;
        label: string;
        type: string;
        disabled: boolean;
    };
};
