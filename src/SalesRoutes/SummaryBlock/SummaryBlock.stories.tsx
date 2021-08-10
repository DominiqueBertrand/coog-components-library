// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import SummaryBlock from "./SummaryBlock";
import { SummaryBlockProps } from './SummaryBlock.types';
import { summaryList } from './SummaryBlock.service';
import { groupList } from './SummaryBlock.service';

export default {
  title: "SalesRoute::SummaryBlock",
  parameters: {
    actions: {
      handles: ['mouseover'],
    },
    component: SummaryBlock,
  },
};

export const SummaryBlockStoryList = (args: SummaryBlockProps): JSX.Element => {
  const { list } = args;

  return <SummaryBlock list={list} />;
};
SummaryBlockStoryList.args = { list: summaryList };

export const SummaryBlockStoryGroup = (args: SummaryBlockProps): JSX.Element => {
  const { groups } = args;

  return <SummaryBlock groups={groups} />;
};
SummaryBlockStoryGroup.args = { groups: groupList };
