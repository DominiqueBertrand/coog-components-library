// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React, { MouseEvent } from "react";

import cn from 'classnames';

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
const Button = ({ id, label, type = 'default', eventEmitter, disabled = false }: ButtonProps): JSX.Element => {
    /**
     * handle click event
     * @param {number} id
     */
    const handleClick = (id: number) => (e: MouseEvent) => {
        e.stopPropagation();
        eventEmitter(id);
    };
    return (
        <div data-testid="Button" className="button-99889523-548b-411b-9a64-35296c3da632 grid-item right" key={`btn-${type}`}>
            <button
                className={cn(`button-${type}`, { 'button-disabled': disabled })}
                type="button"
                disabled={disabled}
                onClick={handleClick(id)}
            >
                {label}
            </button>
        </div>
    )
};

export default Button;

