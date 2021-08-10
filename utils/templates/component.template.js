module.exports = (componentName) => ({
  content:`// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.scss";

const ${componentName} = ({ title }: ${componentName}Props): JSX.Element => (
    <div data-testid="${componentName}" className="foo-bar">{title}</div>
);

export default ${componentName};

`,
  extension: `.tsx`
});
