// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.
import React from 'react';

import { startCase } from 'lodash-es';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { SRHeaderProps } from './SRHeader.types';
import Button from '../../Button';
import './SRHeader.scss';

/**
 * @description Heaader block of EditSalesRoute view
 *
 * @param {string} title
 * @param {string} buttons
 * @param {string} status "play" | "pause" | "stop" | "file-export";
 * @callback eventEmitter
 */
const SRHeader = ({ title, buttons = [], eventEmitter, status = undefined }: SRHeaderProps): JSX.Element => {
    /**
     * handle click event
     * @param {number} id
     */
    const handleClick = (id: number) => {
        eventEmitter(id);
    };
    /**
     * return icon
     * @param {string} icon
     */
    const icon = status ? fas[`fa${startCase(status).replace(/ /g, '')}`] : null;

    return (
        <div data-testid="SRHeader" className="sr-header">
            <div className="grid-item left">
                <h1 className={`md-title md-cell md-cell--12 ${status}`}>{title}</h1>
                {icon && (
                    <div className={`icon-status ${status}`}>
                        <FontAwesomeIcon icon={icon} size="sm" />
                    </div>
                )}
            </div>
            {buttons.map(button => (
                <div className="grid-item right" key={`btn - ${button.type} `}>
                    <Button
                        id={button.id}
                        type={button.type}
                        label={button.label}
                        eventEmitter={handleClick}
                        disabled={button.disabled}
                     />
                </div>
            ))}
        </div>
    );
};

export default SRHeader;
