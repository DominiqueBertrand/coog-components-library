module.exports = (componentName) => ({
  content: `// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      title: "bar"
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render foo text correctly", () => {
    props.title = "in the kitchen";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    expect(component).toHaveTextContent("in the kitchen");
  });
});
`,
  extension: `.test.tsx`
});
