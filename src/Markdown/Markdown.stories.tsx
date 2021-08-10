// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import Markdown from "./Markdown";
import { MarkdownProps } from './Markdown.types';

export default {
    title: "Markdown",
    parameters: {
      actions: {
        handles: ['mouseover', 'click .btn'],
      },
      component: Markdown,
    },
};

export const MarkdownStory = (args: MarkdownProps): JSX.Element => {
  const {string} = args;

  return <Markdown string={string} />;
};
MarkdownStory.args = { string: 'Hello **big** *World* !' };
