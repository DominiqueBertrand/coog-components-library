// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from 'react';

import Group from './Group';
import { GroupProps } from './Group.types';
import { questions, title } from './Group.service';

export default {
  title: 'Group',
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    component: Group,
  },
};

export const GroupStory = (args: GroupProps): JSX.Element => {
  const { questions, title, description, tooltip, sequence, id } = args;

  return <Group questions={questions} title={title} description={description} tooltip={tooltip} sequence={sequence} id={id} />;
};
GroupStory.args = { questions, title };
