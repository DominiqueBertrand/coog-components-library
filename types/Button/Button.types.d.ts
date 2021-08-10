export interface ButtonProps {
    id: number;
    label: string;
    eventEmitter: (id: number) => void;
    type?: "warning" | "error" | "primary" | "default" | "disabled" | "orange" | "green" | "purple";
    disabled?: boolean;
}
