// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from 'react';

import SRHeader from './SRHeader';
import Button from '../../Button'
import { SRHeaderProps } from './SRHeader.types';

export default {
    title: 'SalesRoute::Header',
    parameters: {
        actions: {
            handles: ['click .button-warning', 'click .button-cancel'],
        },
        component: SRHeader,
        subcomponents: {
            Button,
        },
    },
    argTypes: {
        status: {
            control: {
                type: 'select',
                options: [
                    'play', 'stop', 'pause', "file-export", 'share', 'cube', 'archive', 'thumbtack'
                ]
            },
        },
    },
};

export const Header = (args: SRHeaderProps): JSX.Element => {
    const { title, buttons, status, eventEmitter } = args;

    return <SRHeader title={title} eventEmitter={eventEmitter} buttons={buttons} status={status} />;
};

const title = 'Parcours de vente';
const status = 'play';
const buttons = [
    { id: 0, label: 'Mettre en attente', type: 'warning', disabled: false },
    { id: 1, label: 'Annuler', type: 'error', disabled: false },
];
const eventEmitter = (id: number) => console.log(`eventEmitter::${id}`);

Header.args = { title, buttons, status, eventEmitter };