// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      label: "in the kitchen",
      id: 18181818,
      eventEmitter: (id: number) => console.log(`eventEmitter::${id}`)
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    props.label = "in the kitchen";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("in the kitchen");
  });
});
