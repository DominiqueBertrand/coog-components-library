// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import ReactMarkdown from 'react-markdown';
import { get } from 'lodash-es';

import { MarkdownProps } from "./Markdown.types";

import "./Markdown.scss";

const Markdown = ({ strings={}, string, className='i18n-markdown', defaultValue='' }: MarkdownProps) : JSX.Element => {
    const source = get(strings, string, string) || defaultValue;
    if (typeof source === 'string') {
        return <div data-testid="Markdown" className='markdown-43ab78b8-b743-46de-a95d-6ed371f5a938'>
          <ReactMarkdown className={className}>{source}</ReactMarkdown>
        </div>;
    }
    return <div data-testid="Markdown" className='markdown-43ab78b8-b743-46de-a95d-6ed371f5a938'><span>{defaultValue}</span></div>;
  };

export default Markdown;

