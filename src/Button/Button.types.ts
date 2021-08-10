// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

export interface ButtonProps {
    id: number;
    label: string;
    eventEmitter: (id: number) => void;
    type?: "warning" | "error" | "primary" | "default"  | "disabled"  | "orange"  | "green"  | "purple" ;
    disabled?: boolean;
}
