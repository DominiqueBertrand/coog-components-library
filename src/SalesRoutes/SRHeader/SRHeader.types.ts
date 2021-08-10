// Generated with util/create-component.js
import { ButtonProps } from "../../Button/Button.types";

export interface SRHeaderProps {
    title: string;
    buttons?: Array<ButtonProps>;
    eventEmitter: (id: number) => void;
    status?: "play" | "pause" | "stop";
}
