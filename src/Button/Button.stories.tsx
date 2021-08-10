// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: 'Button',
  parameters: {
    actions: {
      handles: ['mouseover', 'click button'],
    },
    component: Button,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['warning', 'error', 'primary', 'default', 'disabled', 'orange', 'green', 'purple'],
      },
    },
  },
};

export const ButtonWarning = (args: ButtonProps): JSX.Element => {
  const { id, label, type, disabled } = args;
  const eventEmitter = (ref: number) => console.log(`eventEmitter::${ref}`);

  return <Button id={id} label={label} type={type} disabled={disabled} eventEmitter={eventEmitter} />;
};

ButtonWarning.args = { id: 0, label: 'Btn Warning', type: 'warning', disabled: false };

export const ButtonError = (args: ButtonProps): JSX.Element => {
  const { id, label, type, disabled } = args;
  const eventEmitter = (ref: number) => console.log(`eventEmitter::${ref}`);

  return <Button id={id} label={label} type={type} disabled={disabled} eventEmitter={eventEmitter} />;
};

ButtonError.args = { id: 1, label: 'Btn Error', type: 'error', disabled: false };

export const ButtonPrimary = (args: ButtonProps): JSX.Element => {
  const { id, label, type, disabled } = args;
  const eventEmitter = (ref: number) => console.log(`eventEmitter::${ref}`);

  return <Button id={id} label={label} type={type} disabled={disabled} eventEmitter={eventEmitter} />;
};

ButtonPrimary.args = { id: 2, label: 'Btn Primary', type: 'primary', disabled: false };

export const ButtonDefault = (args: ButtonProps): JSX.Element => {
  const { id, label, type, disabled } = args;
  const eventEmitter = (ref: number) => console.log(`eventEmitter::${ref}`);

  return <Button id={id} label={label} type={type} disabled={disabled} eventEmitter={eventEmitter} />;
};

ButtonDefault.args = { id: 3, label: 'Btn Default', type: 'default', disabled: false };
export const ButtonDisabled = (args: ButtonProps): JSX.Element => {
  const { id, label, type, disabled } = args;
  const eventEmitter = (ref: number) => console.log(`eventEmitter::${ref}`);

  return <Button id={id} label={label} type={type} disabled={disabled} eventEmitter={eventEmitter} />;
};

ButtonDisabled.args = { id: 4, label: 'Btn Disabled', type: 'default', disabled: true };
