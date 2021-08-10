// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import Select from "./Select";
import { SelectProps } from "./Select.types";

describe("Test Component", () => {
  let props: SelectProps;

  beforeEach(() => {
    props = {
      options: [],
      eventEmitter: (event) => event
    };
  });

  const renderComponent = () => render(<Select {...props} />);

  it("should render foo text correctly", () => {
    props.options = [];
    props.eventEmitter = (event) => event;
    const { getByTestId } = renderComponent();

    const component = getByTestId("Select");

    // expect(component).toHaveTextContent("in the kitchen");
  });
});
