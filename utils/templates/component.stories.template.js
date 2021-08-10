module.exports = (componentName) => ({
  content: `// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from './${componentName}.types';

export default {
    title: "${componentName}",
    parameters: {
      actions: {
        handles: ['mouseover', 'click .btn'],
      },
      component: ${componentName},
    },
};

export const ${componentName}Story = (args: ${componentName}Props): JSX.Element => {
  const {label} = args;

  return <${componentName} title={label} />;
};
${componentName}Story.args = { label: 'Hello World !' };
`,
  extension: `.stories.tsx`
});

