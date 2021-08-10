import { ButtonProps } from "./Button.types";
import "./Button.scss";
/**
 * @class
 * Button Component
 * @param {number} id
 * @param {string} label
 * @param {string} type enum: "warning" | "error" | "primary" | "default"
 * @param {boolean} disabled
 * @callback eventEmitter
 */
declare const Button: ({ id, label, type, eventEmitter, disabled }: ButtonProps) => JSX.Element;
export default Button;
